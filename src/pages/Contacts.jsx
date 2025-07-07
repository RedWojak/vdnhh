import React, { useState } from "react";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold mb-8 text-amber-700 animate-fade-in-up">
        Контакты
      </h2>
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-150">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Как нас найти
          </h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-bold text-amber-700">Адрес:</div>
              <div>г. Москва, ВДНХ, павильон 84</div>
            </div>
            <div>
              <div className="font-bold text-amber-700">Телефон:</div>
              <div>+7 (495) 123-45-67</div>
            </div>
            <div>
              <div className="font-bold text-amber-700">Email:</div>
              <div>info@fabrika-chocolate.ru</div>
            </div>
            <div>
              <div className="font-bold text-amber-700">Режим работы:</div>
              <div>Ежедневно с 10:00 до 20:00</div>
            </div>
          </div>
          <div className="mt-6 bg-amber-50/80 rounded-xl p-4">
            <h4 className="font-bold text-amber-700 mb-2">Как добраться:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Метро ВДНХ (оранжевая линия)</li>
              <li>• Автобусы: 33, 76, 136</li>
              <li>• Троллейбусы: 14, 48</li>
              <li>• Бесплатная парковка для гостей</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Напишите нам
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-amber-400"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-amber-400"
            />
            <textarea
              name="message"
              required
              placeholder="Ваше сообщение"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded border focus:outline-amber-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
            >
              Отправить сообщение
            </button>
            {sent && (
              <div className="text-green-600 font-bold text-center">
                Сообщение отправлено!
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="bg-orange-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-200">
        <h3 className="text-xl font-bold mb-3 text-amber-700">
          Мы в социальных сетях
        </h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
          >
            VK
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
