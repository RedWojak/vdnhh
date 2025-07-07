import React from "react";

const advantages = [
  "Игровая зона для детей",
  "Обучающие модули",
  "Экскурсии и мастер-классы",
  "Зона кафе и магазин сладостей",
  "Праздничные программы",
];

const formats = [
  "Индивидуальные посещения",
  "Группы (школы, детсады)",
  "Дни рождения и праздники",
  "Семейные выходные",
];

const gallery = [
  "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
];

export default function About() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-amber-700 animate-fade-in-up">
          О центре
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-150">
          «Фабрика шоколадных открытий» — это уникальное пространство для детей
          и взрослых, где каждый может узнать секреты шоколада, поучаствовать в
          мастер-классах и просто отлично провести время!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up delay-200">
        {gallery.map((src, i) => (
          <div key={i} className="relative foil-glossy w-64 h-40">
            <img
              src={src}
              alt="Галерея центра"
              className="w-64 h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="w-64 h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl shadow-lg flex items-center justify-center text-amber-800 font-bold text-lg"
              style={{ display: "none" }}
            >
              Шоколадная фабрика
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-amber-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-300">
          <h3 className="text-2xl font-semibold mb-3 text-amber-600">
            Преимущества
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {advantages.map((adv, i) => (
              <li key={i}>{adv}</li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-400">
          <h3 className="text-2xl font-semibold mb-3 text-amber-600">
            Форматы посещения
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {formats.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
