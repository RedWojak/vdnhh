import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-200/60 via-orange-100/60 to-amber-300/60">
      <img
        src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80"
        alt="Шоколадная фабрика и мастер-классы"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 blur-[2px] scale-105 z-0 transition-all duration-700"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 animate-fade-in-up"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Фабрика шоколадных открытий
        </h1>
        <p
          className="text-xl md:text-2xl text-white font-bold mb-10 animate-fade-in-up delay-200 drop-shadow-lg"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
        >
          Центр сладких впечатлений, творчества и семейных открытий
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/tickets"
            className="px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-bounce-in"
          >
            Оставить заявку
          </Link>
          <Link
            to="/classes"
            className="px-8 py-4 rounded-full bg-orange-600 text-white font-bold text-lg shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 animate-bounce-in delay-150"
          >
            Мастер-классы
          </Link>
        </div>
      </div>
    </section>
  );
}
