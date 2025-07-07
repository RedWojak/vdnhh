import React, { useState } from "react";

const classes = [
  {
    title: "Шоколадная плитка своими руками",
    desc: "Создайте авторскую шоколадку с уникальным декором и начинками!",
    price: "1200₽",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80",
    times: ["12:00", "15:00", "18:00"],
  },
  {
    title: "Роспись пряников",
    desc: "Украсьте имбирные пряники глазурью и посыпками — для детей и взрослых.",
    price: "900₽",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    times: ["11:00", "14:00", "17:00"],
  },
  {
    title: "Шоколадные фигуры",
    desc: "Лепим и декорируем фигурки из шоколада, забираем с собой!",
    price: "1500₽",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
    times: ["13:00", "16:00"],
  },
];

export default function Classes() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", classTitle: "" });
  const [sent, setSent] = useState(false);

  function openForm(cls) {
    setSelected(cls);
    setForm({ ...form, classTitle: cls.title });
    setSent(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="space-y-8 md:space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-amber-700 animate-fade-in-up text-center">
        Мастер-классы
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {classes.map((cls, i) => (
          <div
            key={i}
            className="bg-amber-50/80 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center animate-fade-in-up delay-200"
          >
            <div className="foil-glossy w-full h-32 md:h-40 mb-4 rounded-lg md:rounded-xl overflow-hidden">
              <img
                src={cls.img}
                alt={cls.title}
                className="w-full h-32 md:h-40 object-cover rounded-lg md:rounded-xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            </div>
            <div
              className="w-full h-32 md:h-40 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg md:rounded-xl mb-4 flex items-center justify-center text-amber-800 font-bold text-sm md:text-lg"
              style={{ display: "none" }}
            >
              {cls.title}
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-amber-600 mb-2 text-center">
              {cls.title}
            </h3>
            <p className="text-gray-700 mb-3 text-sm md:text-base text-center">
              {cls.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-3 justify-center">
              {cls.times.map((t, j) => (
                <span
                  key={j}
                  className="bg-orange-200 text-amber-800 px-2 py-1 rounded text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="text-base md:text-lg font-bold text-amber-700 mb-4">
              {cls.price}
            </div>
            <button
              onClick={() => openForm(cls)}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-amber-600 text-white font-bold text-sm md:text-base shadow hover:bg-orange-600 hover:text-white transition-all duration-300 animate-bounce-in w-full max-w-xs"
            >
              Записаться
            </button>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-amber-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md animate-fade-in-up"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-amber-700">
              Запись на: {selected.title}
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
            <input
              name="classTitle"
              value={form.classTitle}
              readOnly
              className="w-full mb-3 px-4 py-2 rounded border bg-gray-100"
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-full bg-amber-600 text-white font-bold shadow hover:bg-orange-600 hover:text-white transition"
              >
                Отправить
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex-1 px-4 py-2 rounded-full bg-gray-200 text-amber-700 font-bold shadow hover:bg-amber-100 transition"
              >
                Отмена
              </button>
            </div>
            {sent && (
              <div className="text-green-600 font-bold mt-4 text-center">
                Заявка отправлена!
              </div>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
