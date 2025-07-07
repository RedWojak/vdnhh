import React from "react";
import { Link } from "react-router-dom";
import FoilImage from "../components/FoilImage";

// SVG pattern: flat file for CSS background
const wavePattern = "/background-pattern.svg";

export default function Home() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[50vh] md:min-h-[60vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
      style={{
        backgroundColor: "#6B3F1D",
      }}
    >
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: `url('${wavePattern}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      />
      {/* Banner image as background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 5, pointerEvents: "none" }}
      >
        <FoilImage
          src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80"
          alt="Шоколадная фабрика и мастер-классы"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Overlay for darkening the image */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        style={{ zIndex: 20, pointerEvents: "none" }}
      />
      {/* Content centered above the image */}
      <div
        className="relative flex flex-col items-center justify-center py-12 md:py-24 px-4 text-center w-full"
        style={{ zIndex: 30 }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-4 md:mb-6 animate-fade-in-up"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Фабрика шоколадных открытий
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-6 md:mb-10 animate-fade-in-up delay-200 drop-shadow-lg px-2"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
        >
          Центр сладких впечатлений, творчества и семейных открытий
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mx-auto max-w-md mt-10">
          <Link
            to="/tickets"
            className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-amber-500 text-white font-bold text-base md:text-lg shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-bounce-in text-center"
          >
            Оставить заявку
          </Link>
          <Link
            to="/classes"
            className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-orange-600 text-white font-bold text-base md:text-lg shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 animate-bounce-in delay-150 text-center"
          >
            Мастер-классы
          </Link>
        </div>
      </div>
    </section>
  );
}
