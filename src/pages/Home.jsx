import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FoilImage from "../components/FoilImage";

// SVG pattern: flat file for CSS background
const wavePattern = "/background-pattern.svg";

const aboutAdvantages = [
  "Игровая зона для детей",
  "Обучающие модули",
  "Экскурсии и мастер-классы",
  "Зона кафе и магазин сладостей",
  "Праздничные программы",
];

const aboutFormats = [
  "Индивидуальные посещения",
  "Группы (школы, детсады)",
  "Дни рождения и праздники",
  "Семейные выходные",
];

const aboutGallery = [
  "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
];

const ticketPrices = [
  { type: "Взрослый", price: "1000₽" },
  { type: "Детский (до 12 лет)", price: "700₽" },
  { type: "Группа (от 10 чел.)", price: "900₽/чел." },
  { type: "Льготный", price: "600₽" },
];

export default function Home() {
  const aboutRef = useRef(null);
  const ticketsRef = useRef(null);
  const location = useLocation();

  // Tickets section state
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: ticketPrices[0].type,
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  useEffect(() => {
    if (location.pathname === "/about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (location.pathname === "/tickets" && ticketsRef.current) {
      ticketsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      {/* Main banner section */}
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

      {/* About section under banner */}
      <section id="about" ref={aboutRef} className="space-y-12 mt-16">
        <div className="text-center">
          <h2
            className="text-4xl font-bold mb-4 text-white animate-fade-in-up"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            О центре
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-150">
            «Фабрика шоколадных открытий» — это уникальное пространство для
            детей и взрослых, где каждый может узнать секреты шоколада,
            поучаствовать в мастер-классах и просто отлично провести время!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up delay-200">
          {aboutGallery.map((src, i) => (
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
              {aboutAdvantages.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-400">
            <h3 className="text-2xl font-semibold mb-3 text-amber-600">
              Форматы посещения
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {aboutFormats.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tickets section under About */}
      <section id="tickets" ref={ticketsRef} className="space-y-12 mt-16">
        <h2
          className="text-4xl font-bold mb-8 text-white animate-fade-in-up"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          Билеты
        </h2>
        <div className="overflow-x-auto animate-fade-in-up delay-150">
          <table className="min-w-[400px] w-full bg-amber-50/80 rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-amber-100 text-amber-700">
                <th className="py-3 px-4 text-left">Тип билета</th>
                <th className="py-3 px-4 text-left">Цена</th>
              </tr>
            </thead>
            <tbody>
              {ticketPrices.map((row, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{row.type}</td>
                  <td className="py-2 px-4 font-bold">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 animate-bounce-in"
        >
          Купить
        </button>
        {open && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-amber-50 rounded-2xl p-8 shadow-2xl w-full max-w-md animate-fade-in-up"
            >
              <h4 className="text-2xl font-bold mb-4 text-amber-700">
                Заявка на билет
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
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 rounded border bg-gray-100"
              >
                {ticketPrices.map((row, i) => (
                  <option key={i} value={row.type}>
                    {row.type}
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
    </>
  );
}
