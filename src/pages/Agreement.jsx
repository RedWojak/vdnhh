import React from "react";

export default function Agreement() {
  return (
    <section className="max-w-3xl mx-auto py-8 animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-4 text-pink-700">
        Пользовательское соглашение
      </h2>
      <p className="text-gray-700 mb-2">
        Используя сайт «Фабрика шоколадных открытий», вы соглашаетесь соблюдать
        правила пользования ресурсом и не нарушать действующее законодательство
        РФ.
      </p>
      <p className="text-gray-700 mb-2">
        Администрация сайта не несет ответственности за действия пользователей,
        нарушающих условия соглашения.
      </p>
      <p className="text-gray-700">
        Все материалы сайта защищены авторским правом. Копирование и
        распространение без согласия запрещены.
      </p>
    </section>
  );
}
