import React from "react";

export default function Simple() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] animate-fade-in-up">
      <div className="text-center space-y-6">
        <img
          src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=400&q=80"
          alt="Шоколадные конфеты"
          className="w-64 h-48 object-cover rounded-xl shadow-lg mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold mb-4 text-amber-700">
          Простая HTML-страница
        </h2>
        <p className="text-lg text-gray-700 max-w-md">
          Это пример самой простой страницы без сложной структуры, но с
          шоколадной тематикой!
        </p>
      </div>
    </section>
  );
}
