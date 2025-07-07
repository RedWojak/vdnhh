import React, { useState } from "react";
import FoilImage from "../components/FoilImage";

const formats = [
  {
    name: "День рождения",
    desc: "Праздник с мастер-классом, аниматорами и сладким столом.",
    img: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Выпускной",
    desc: "Яркая программа для выпускников с шоколадным шоу.",
    img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Семейный праздник",
    desc: "Тёплая атмосфера, игры, подарки и угощения.",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80",
  },
];

const services = [
  "Декор зала",
  "Аниматоры и ведущие",
  "Меню (кейтеринг)",
  "Аренда столиков в кафе",
  "Подарки для гостей",
];

export default function Events() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    format: formats[0].name,
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
        Проведение праздников
      </h2>
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-150">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-amber-600">
            Форматы
          </h3>
          <ul className="space-y-3">
            {formats.map((f, i) => (
              <li key={i} className="bg-amber-50/80 rounded-xl p-4 shadow">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <FoilImage
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-amber-700">{f.name}</div>
                    <div className="text-gray-700 text-sm">{f.desc}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-amber-600">Услуги</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-orange-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-200">
        <h4 className="text-xl font-bold mb-2 text-amber-700">
          Пример программы
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Встреча гостей, welcome-drink</li>
          <li>Мастер-класс по шоколаду</li>
          <li>Игры и анимация</li>
          <li>Праздничный стол, торт</li>
          <li>Подарки и фото на память</li>
        </ol>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-4 rounded-full bg-amber-600 text-white font-bold text-lg shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 animate-bounce-in"
      >
        Заказать праздник
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-amber-50 rounded-2xl p-8 shadow-2xl w-full max-w-md animate-fade-in-up"
          >
            <h4 className="text-2xl font-bold mb-4 text-amber-700">
              Заказ праздника
            </h4>
            <input
              name="name"
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border focus:outline-amber-400"
            />
            <input
              name="phone"
              required
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border focus:outline-amber-400"
            />
            <select
              name="format"
              value={form.format}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border bg-gray-100"
            >
              {formats.map((f, i) => (
                <option key={i} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
              >
                Отправить
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2 rounded-full bg-gray-200 text-amber-700 font-bold shadow hover:bg-amber-100 transition"
              >
                Отмена
              </button>
            </div>
            {sent && (
              <div className="text-green-600 font-bold mt-4">
                Заявка отправлена!
              </div>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
