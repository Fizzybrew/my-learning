import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero секция на весь экран */}
      <header className="relative -mt-10 min-h-screen flex flex-col items-center justify-center gap-6 lg:text-center p-10">
        <h1 className="text-6xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-4xl animate-fade-in">
          Развивайте свои навыки{" "}
          <span className="text-indigo-600 dark:text-indigo-400">бесплатно</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl animate-fade-in-delay-1">
          создавая современные веб-приложения и повышайте свой профессиональный
          уровень, обучаясь JavaScript, HTML, CSS и React
        </p>
        <button
          className="py-6 px-8 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl text-white font-semibold text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
          aria-label="Начать бесплатное обучение"
        >
          Начни бесплатно
        </button>

        {/* Стрелка-подсказка */}
        <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2">
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* Секция с преимуществами */}
<section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-black dark:to-purple-950/30">
  <div className="flex flex-wrap justify-center gap-6 md:gap-16">
    {/* Бесплатно */}
    <div className="flex flex-col items-center gap-3 w-40">
      <div className="w-16 h-16 text-indigo-600 dark:text-indigo-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-center">Бесплатно навсегда</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Без пробных периодов и подписок</p>
    </div>

    {/* Sandbox */}
    <div className="flex flex-col items-center gap-3 w-40">
      <div className="w-16 h-16 text-indigo-600 dark:text-indigo-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-center">Живой редактор</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Пиши код и сразу видишь результат</p>
    </div>

    {/* Проекты */}
    <div className="flex flex-col items-center gap-3 w-40">
      <div className="w-16 h-16 text-indigo-600 dark:text-indigo-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-center">3 готовых проекта</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Для твоего портфолио</p>
    </div>

    {/* Обсуждения */}
    <div className="flex flex-col items-center gap-3 w-40">
      <div className="w-16 h-16 text-indigo-600 dark:text-indigo-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-center">Обсуждения</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Помогайте друг другу в чате</p>
    </div>
  </div>
</section>

      {/* Секция с карточками */}
      <section
        className="flex flex-col gap-6 px-5 py-16"
        aria-label="Преимущества обучения"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Почему стоит начать?
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-8">
          Четыре столпа современной веб-разработки
        </p>

        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Карточка HTML */}
          <article
            className="group relative p-0.5 rounded-2xl bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-700 ease-out h-full"
            aria-labelledby="html-heading"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-md transition-shadow duration-700 h-full">
              <figure className="shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 group-hover:scale-105 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
              </figure>
              <div>
                <h3
                  id="html-heading"
                  className="text-slate-900 dark:text-white font-semibold text-lg mb-1 leading-tight"
                >
                  Основа современной верстки
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Изучите семантическую разметку и новые стандарты
                </p>
              </div>
            </div>
          </article>

          {/* Карточка CSS */}
          <article
            className="group relative p-0.5 rounded-2xl bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-700 ease-out h-full"
            aria-labelledby="css-heading"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-md transition-shadow duration-700 h-full">
              <figure className="shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 group-hover:scale-105 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
              </figure>
              <div>
                <h3
                  id="css-heading"
                  className="text-slate-900 dark:text-white font-semibold text-lg mb-1 leading-tight"
                >
                  Магия стиля и анимации
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Оживите интерфейс с помощью стилей, флексов и гридов
                </p>
              </div>
            </div>
          </article>

          {/* Карточка JavaScript */}
          <article
            className="group relative p-0.5 rounded-2xl bg-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-700 ease-out h-full"
            aria-labelledby="js-heading"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-md transition-shadow duration-700 h-full">
              <figure className="shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 group-hover:scale-105 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
              </figure>
              <div>
                <h3
                  id="js-heading"
                  className="text-slate-900 dark:text-white font-semibold text-lg mb-1 leading-tight"
                >
                  Динамика и интерактивность
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Укротите асинхронность и создайте мощный функционал под капотом
                </p>
              </div>
            </div>
          </article>

          {/* Карточка React */}
          <article
            className="group relative p-0.5 rounded-2xl bg-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-700 ease-out h-full"
            aria-labelledby="react-heading"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-md transition-shadow duration-700 h-full">
              <figure className="shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 group-hover:scale-105 transition-transform duration-500 ease-out"
                  aria-hidden="true"
                />
              </figure>
              <div>
                <h3
                  id="react-heading"
                  className="text-slate-900 dark:text-white font-semibold text-lg mb-1 leading-tight"
                >
                  Компонентный подход
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Создавайте переиспользуемые компоненты и управляйте состоянием
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ секция */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {[
              { q: "Сколько времени нужно уделять?", a: "2-3 часа в день достаточно для прогресса." },
              { q: "Нужен ли опыт?", a: "Нет, курс подходит для полных новичков." },
              { q: "Будет ли сертификат?", a: "Да, после завершения всех проектов." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800">
                <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{faq.q}</h3>
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-45 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}