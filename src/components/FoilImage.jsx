import React, { useState, useRef } from "react";

const FoilImage = ({ src, alt, className = "", style = {} }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={containerRef}
      className={`foil-image-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {/* Base image or fallback */}
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s ease",
            position: "relative",
            zIndex: 1,
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#fbbf24",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          Нет фото
        </div>
      )}

      {/* Foil overlay */}
      <div
        className="foil-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          background: `
            radial-gradient(
              circle at ${mousePos.x}% ${mousePos.y}%, 
              rgba(255, 215, 0, 0.8) 0%, 
              rgba(255, 165, 0, 0.4) 20%, 
              rgba(255, 140, 0, 0.2) 40%, 
              transparent 60%
            ),
            linear-gradient(
              45deg,
              transparent 30%,
              rgba(255, 215, 0, 0.1) 50%,
              transparent 70%
            ),
            linear-gradient(
              -45deg,
              transparent 30%,
              rgba(255, 165, 0, 0.1) 50%,
              transparent 70%
            )
          `,
          opacity: isHovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* Animated shine effect */}
      <div
        className="shine-effect"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.4) 45%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0.4) 55%,
              transparent 100%
            )
          `,
          transform: `translateX(${isHovered ? "100%" : "-100%"})`,
          transition: "transform 0.6s ease",
          pointerEvents: "none",
        }}
      />

      {/* Holographic effect */}
      <div
        className="holographic-effect"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 4,
          background: `
            linear-gradient(
              45deg,
              transparent 0%,
              rgba(255, 0, 255, 0.1) 25%,
              rgba(0, 255, 255, 0.1) 50%,
              rgba(255, 255, 0, 0.1) 75%,
              transparent 100%
            )
          `,
          opacity: isHovered ? 0.6 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          mixBlendMode: "color",
        }}
      />

      {/* CSS animations for continuous foil movement */}
      <style jsx>{`
        .foil-image-container:hover img {
          transform: scale(1.02);
        }
        .foil-overlay::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 215, 0, 0.1) 10px,
            rgba(255, 215, 0, 0.1) 20px
          );
          animation: ${isHovered ? "foilMove 2s linear infinite" : "none"};
          z-index: 5;
        }
        @keyframes foilMove {
          0% {
            transform: translateX(-20px) translateY(-20px);
          }
          100% {
            transform: translateX(20px) translateY(20px);
          }
        }
        .shine-effect::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.8) 0%,
            transparent 70%
          );
          animation: ${isHovered ? "pulse 1.5s ease-in-out infinite" : "none"};
          z-index: 6;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default FoilImage;
