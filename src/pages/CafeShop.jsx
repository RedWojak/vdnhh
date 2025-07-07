import React, { useState } from "react";
import FoilImage from "../components/FoilImage";

const menu = [
  {
    name: "Горячий шоколад",
    price: "350₽",
    desc: "Густой и ароматный",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Шоколадный коктейль",
    price: "450₽",
    desc: "С мороженым и взбитыми сливками",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Шоколадный торт",
    price: "280₽",
    desc: "Кусочек 150г",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Шоколадные конфеты",
    price: "120₽",
    desc: "3 шт. ручной работы",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Кофе с шоколадом",
    price: "320₽",
    desc: "Латте или капучино",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  },
];

const shop = [
  {
    name: "Набор конфет",
    price: "890₽",
    desc: "12 шт. в красивой коробке",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Шоколадная плитка",
    price: "450₽",
    desc: "72% какао, 100г",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Подарочный набор",
    price: "1200₽",
    desc: "Конфеты + горячий шоколад",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Шоколадные фигурки",
    price: "350₽",
    desc: "Ручная лепка",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CafeShop() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", item: "" });
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
        Кафе и магазин
      </h2>
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-150">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Меню кафе
          </h3>
          <div className="space-y-3">
            {menu.map((item, i) => (
              <div
                key={i}
                className="bg-amber-50/80 rounded-xl p-4 shadow flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <FoilImage
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-amber-700">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
                <div className="text-amber-600 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Магазин
          </h3>
          <div className="space-y-3">
            {shop.map((item, i) => (
              <div
                key={i}
                className="bg-orange-50/80 rounded-xl p-4 shadow flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <FoilImage
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-amber-700">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
                <div className="text-amber-600 font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-amber-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-200">
        <h4 className="text-xl font-bold mb-2 text-amber-700">Акции</h4>
        <ul className="space-y-2 text-gray-700">
          <li>• Скидка 15% на все в будни с 10:00 до 12:00</li>
          <li>• При покупке от 1000₽ - бесплатный горячий шоколад</li>
          <li>• Детский набор: конфеты + напиток = 500₽</li>
          <li>• Скидка 20% на подарочные наборы в выходные</li>
        </ul>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-4 rounded-full bg-amber-600 text-white font-bold text-lg shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 animate-bounce-in"
      >
        Заказать доставку
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-amber-50 rounded-2xl p-8 shadow-2xl w-full max-w-md animate-fade-in-up"
          >
            <h4 className="text-2xl font-bold mb-4 text-amber-700">
              Заказ доставки
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
              name="item"
              required
              placeholder="Что заказываете?"
              value={form.item}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 rounded border focus:outline-amber-400"
            />
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
                Заказ отправлен!
              </div>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
