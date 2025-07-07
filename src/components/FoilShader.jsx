import React, { useRef, useEffect, useState } from "react";

const FoilShader = ({ children, className = "" }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.warn("WebGL2 not supported, falling back to regular image");
      return;
    }

    // Vertex shader
    const vertexShaderSource = `#version 300 es
      in vec2 a_position;
      in vec2 a_texCoord;
      out vec2 v_texCoord;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    // Fragment shader with foil effect
    const fragmentShaderSource = `#version 300 es
      precision highp float;
      
      in vec2 v_texCoord;
      out vec4 fragColor;
      
      uniform sampler2D u_image;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_hover;
      
      // Noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      // Foil effect
      vec3 foilEffect(vec2 uv, vec2 mouse, float time) {
        // Base foil pattern
        float foil = smoothNoise(uv * 8.0 + time * 0.5);
        foil += smoothNoise(uv * 16.0 - time * 0.3) * 0.5;
        foil += smoothNoise(uv * 32.0 + time * 0.2) * 0.25;
        
        // Mouse interaction
        vec2 mouseDist = uv - mouse;
        float mouseInfluence = 1.0 - length(mouseDist) * 2.0;
        mouseInfluence = max(0.0, mouseInfluence);
        
        // Holographic effect
        float holographic = sin(uv.x * 20.0 + time * 2.0) * 0.5 + 0.5;
        holographic *= sin(uv.y * 15.0 - time * 1.5) * 0.5 + 0.5;
        
        // Combine effects
        float foilIntensity = foil * 0.7 + holographic * 0.3;
        foilIntensity *= (1.0 + mouseInfluence * 0.5);
        
        // Color variations
        vec3 foilColor = mix(
          vec3(1.0, 0.8, 0.4),  // Gold
          vec3(0.8, 0.6, 0.2),  // Bronze
          foilIntensity
        );
        
        // Add rainbow effect on hover
        if (u_hover > 0.5) {
          float rainbow = sin(uv.x * 10.0 + time * 3.0) * 0.5 + 0.5;
          foilColor = mix(foilColor, vec3(1.0, 0.5, 0.8), rainbow * 0.3);
        }
        
        return foilColor * foilIntensity;
      }
      
      void main() {
        vec4 texColor = texture(u_image, v_texCoord);
        
        // Apply foil effect
        vec3 foil = foilEffect(v_texCoord, u_mouse, u_time);
        
        // Blend with original image
        vec3 finalColor = mix(texColor.rgb, foil, 0.3);
        
        // Add shine effect
        float shine = smoothNoise(v_texCoord * 4.0 + u_time * 0.1);
        shine = pow(shine, 2.0);
        finalColor += shine * 0.2;
        
        fragColor = vec4(finalColor, texColor.a);
      }
    `;

    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "Shader program link error:",
        gl.getProgramInfoLog(program)
      );
      return;
    }

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    const imageLocation = gl.getUniformLocation(program, "u_image");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const hoverLocation = gl.getUniformLocation(program, "u_hover");

    // Create buffers
    const positionBuffer = gl.createBuffer();
    const texCoordBuffer = gl.createBuffer();

    // Set up rectangle
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    const texCoords = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);

    // Create texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Animation loop
    let startTime = Date.now();
    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      // Set uniforms
      gl.uniform2f(mouseLocation, mousePos.x, mousePos.y);
      gl.uniform1f(timeLocation, time);
      gl.uniform1f(hoverLocation, isHovered ? 1.0 : 0.0);

      // Set up attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    };

    // Load image and start rendering
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

      render();
    };

    // Try to load from children if it's an img element
    if (children && children.type === "img") {
      img.src = children.props.src;
    } else {
      // Fallback to a default image or create a canvas-based image
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = 400;
      tempCanvas.height = 300;
      const ctx = tempCanvas.getContext("2d");

      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, 400, 300);
      gradient.addColorStop(0, "#f59e42");
      gradient.addColorStop(0.5, "#fbbf24");
      gradient.addColorStop(1, "#b45309");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 300);

      // Add some text
      ctx.fillStyle = "#ffffff";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Chocolate", 200, 150);

      img.src = tempCanvas.toDataURL();
    }
  }, [mousePos, isHovered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  return (
    <div
      className={`foil-shader-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      />
      {children}
    </div>
  );
};

export default FoilShader;
