import React, { useState } from "react";

const faq = [
  {
    q: "С какого возраста можно участвовать в мастер-классах?",
    a: "Мы принимаем детей от 4 лет. Для малышей есть специальные программы с родителями.",
  },
  {
    q: "Нужно ли приносить что-то с собой?",
    a: "Все материалы предоставляются. Рекомендуем принести сменную одежду для детей.",
  },
  {
    q: "Можно ли заказать индивидуальный мастер-класс?",
    a: "Да, мы проводим индивидуальные и семейные занятия. Стоимость уточняйте по телефону.",
  },
  {
    q: "Есть ли скидки для групп?",
    a: "Да, при заказе от 5 человек действует скидка 10%, от 10 человек - 15%.",
  },
  {
    q: "Можно ли забронировать столик в кафе?",
    a: "Да, бронирование возможно по телефону или через форму на сайте.",
  },
  {
    q: "Работаете ли вы в выходные?",
    a: "Да, мы работаем ежедневно с 10:00 до 20:00, включая выходные и праздники.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold mb-8 text-amber-700 animate-fade-in-up">
        Часто задаваемые вопросы
      </h2>
      <div className="space-y-4 animate-fade-in-up delay-150">
        {faq.map((item, i) => (
          <div key={i} className="bg-amber-50/80 rounded-xl shadow">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-amber-100/50 transition-colors"
            >
              <span className="font-bold text-amber-700">{item.q}</span>
              <span className="text-amber-600 text-xl">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-6 text-gray-700 animate-fade-in">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-orange-50/80 rounded-2xl p-6 shadow-lg animate-fade-in-up delay-200">
        <h3 className="text-xl font-bold mb-3 text-amber-700">
          Не нашли ответ?
        </h3>
        <p className="text-gray-700 mb-4">
          Свяжитесь с нами любым удобным способом:
        </p>
        <div className="space-y-2 text-gray-700">
          <div>📞 Телефон: +7 (495) 123-45-67</div>
          <div>📧 Email: info@fabrika-chocolate.ru</div>
          <div>💬 WhatsApp: +7 (495) 123-45-67</div>
        </div>
      </div>
    </section>
  );
}
