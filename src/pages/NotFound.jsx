import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] animate-fade-in-up">
      <h2 className="text-5xl font-extrabold text-pink-700 mb-4">404</h2>
      <p className="text-lg text-gray-700 mb-6">Страница не найдена</p>
      <Link
        to="/"
        className="px-8 py-3 rounded-full bg-yellow-400 text-pink-900 font-bold shadow hover:bg-pink-500 hover:text-white transition"
      >
        На главную
      </Link>
    </section>
  );
}
