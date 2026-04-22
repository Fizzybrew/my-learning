const faqs = [
  { q: "Сколько времени нужно уделять?", a: "2-3 часа в день достаточно для прогресса." },
  { q: "Нужен ли опыт?", a: "Нет, курс подходит для полных новичков." },
  { q: "Будет ли сертификат?", a: "Да, после завершения всех проектов." },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
<details key={i} className="group bg-white/50 dark:bg-slate-900/50 md:backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800">              <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
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
  );
}