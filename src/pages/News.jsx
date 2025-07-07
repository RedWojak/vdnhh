import React, { useState } from "react";

const news = [
  {
    title: 'Новый мастер-класс "Шоколадные букеты"',
    date: "15.12.2024",
    desc: "Учимся создавать красивые букеты из конфет и шоколада.",
  },
  {
    title: "Открытие летней веранды",
    date: "10.12.2024",
    desc: "Теперь можно наслаждаться десертами на свежем воздухе.",
  },
  {
    title: "Праздничная программа на Новый год",
    date: "05.12.2024",
    desc: "Специальные мастер-классы и подарки для детей.",
  },
  {
    title: "Новая коллекция подарочных наборов",
    date: "01.12.2024",
    desc: "Уникальные наборы для любого праздника.",
  },
];

export default function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold mb-8 text-amber-700 animate-fade-in-up">
        Новости
      </h2>
      <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up delay-150">
        {news.map((item, i) => (
          <div
            key={i}
            className="bg-amber-50/80 rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
          >
            <div className="text-amber-600 text-sm mb-2">{item.date}</div>
            <h3 className="text-xl font-bold mb-2 text-amber-700">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-orange-50/80 rounded-2xl p-8 shadow-lg animate-fade-in-up delay-200">
        <h3 className="text-2xl font-bold mb-4 text-amber-700">
          Подписка на новости
        </h3>
        <p className="text-gray-700 mb-4">
          Получайте первыми информацию о новых мастер-классах, акциях и
          событиях!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            required
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded border focus:outline-amber-400"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
          >
            Подписаться
          </button>
        </form>
        {subscribed && (
          <div className="text-green-600 font-bold mt-4">
            Вы успешно подписались!
          </div>
        )}
      </div>
    </section>
  );
}
