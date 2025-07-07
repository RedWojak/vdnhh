import React, { useState } from "react";

const prices = [
  { type: "Взрослый", price: "1000₽" },
  { type: "Детский (до 12 лет)", price: "700₽" },
  { type: "Группа (от 10 чел.)", price: "900₽/чел." },
  { type: "Льготный", price: "600₽" },
];

export default function Tickets() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: prices[0].type,
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
            {prices.map((row, i) => (
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
              {prices.map((row, i) => (
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
  );
}
