// app/learn/html/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

// Тип для урока
type Lesson = {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
};

// Модули курса
const modules = [
  {
    id: "module-1",
    title: "Основы HTML",
    lessons: [
      { id: "intro", title: "Что такое HTML и как он работает", duration: "5 мин", isCompleted: true, isLocked: false },
      { id: "structure", title: "Структура HTML-документа", duration: "8 мин", isCompleted: true, isLocked: false },
      { id: "tags", title: "Теги, атрибуты и элементы", duration: "12 мин", isCompleted: false, isLocked: false },
      { id: "practice-1", title: "Практика: Создаём первую страницу", duration: "15 мин", isCompleted: false, isLocked: false },
    ],
  },
  {
    id: "module-2",
    title: "Текст и ссылки",
    lessons: [
      { id: "headings", title: "Заголовки и параграфы", duration: "6 мин", isCompleted: false, isLocked: false },
      { id: "formatting", title: "Форматирование текста", duration: "10 мин", isCompleted: false, isLocked: false },
      { id: "links", title: "Ссылки и якоря", duration: "8 мин", isCompleted: false, isLocked: false },
      { id: "lists", title: "Списки: маркированные и нумерованные", duration: "7 мин", isCompleted: false, isLocked: true },
    ],
  },
  {
    id: "module-3",
    title: "Медиа и таблицы",
    lessons: [
      { id: "images", title: "Изображения и атрибут alt", duration: "9 мин", isCompleted: false, isLocked: true },
      { id: "tables", title: "Создание таблиц", duration: "12 мин", isCompleted: false, isLocked: true },
      { id: "forms", title: "Основы форм", duration: "15 мин", isCompleted: false, isLocked: true },
    ],
  },
];

// Компонент иконки замка
const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// Компонент иконки галочки (completed)
const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Компонент иконки play
const PlayIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function LearnHtmlPage() {
  const [expandedModules, setExpandedModules] = useState<string[]>(["module-1"]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
  };

  // Подсчёт прогресса
  const totalLessons = modules.flatMap((m) => m.lessons).length;
  const completedLessons = modules.flatMap((m) => m.lessons).filter((l) => l.isCompleted).length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="bg-linear-to-br from-orange-50 via-white to-amber-50 dark:from-orange-950/20 dark:via-black dark:to-amber-950/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Хлебные крошки */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                Главная
              </Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                Обучение
              </Link>
              <span>/</span>
              <span className="text-slate-700 dark:text-slate-300">HTML</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              HTML с нуля
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6">
              Научись создавать структуру веб-страниц. От простых тегов до семантической вёрстки.
            </p>

            {/* Прогресс */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-xs border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Прогресс курса
                </span>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {progressPercent}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {completedLessons} из {totalLessons} уроков пройдено
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Список уроков */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Содержание курса
          </h2>

          <div className="space-y-4">
            {modules.map((module) => {
              const isExpanded = expandedModules.includes(module.id);
              const completedInModule = module.lessons.filter((l) => l.isCompleted).length;

              return (
                <div
                  key={module.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  {/* Заголовок модуля */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-semibold text-slate-900 dark:text-white text-left">
                        {module.title}
                      </span>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {completedInModule}/{module.lessons.length}
                    </span>
                  </button>

                  {/* Список уроков модуля */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 dark:border-slate-800">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0 ${
                            lesson.isLocked
                              ? "opacity-60"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {lesson.isCompleted ? (
                              <CheckIcon />
                            ) : lesson.isLocked ? (
                              <LockIcon />
                            ) : (
                              <PlayIcon />
                            )}
                            <span className="text-slate-700 dark:text-slate-300">
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-slate-400">{lesson.duration}</span>
                            {lesson.isLocked && (
                              <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full">
                                                Скоро
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Практическое задание */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-6 md:p-8 border border-indigo-200 dark:border-indigo-900/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Практическое задание
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Создай свою первую HTML-страницу с заголовком, параграфом и ссылкой.
                </p>
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                  Начать задание
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}