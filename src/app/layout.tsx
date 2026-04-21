import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Разработка: Обучение с Нуля до Профи | FIZZY",
  description:
    "Курсы по full stack разработке: React, Next.js, Node.js, SQL. Изучите создание веб-приложений с нуля. Уроки, проекты, практика.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-geist-sans) bg-linear-to-b from-white to-slate-100 dark:from-black dark:to-slate-950 text-slate-900 dark:text-white">
        {/* Dynamic Island шапка */}
        <header
          className="
          fixed top-0 left-0 right-0 z-50 
          p-4 
          md:top-2 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-5xl md:rounded-2xl
          lg:top-2 lg:w-[90%] lg:max-w-6xl
          backdrop-blur-md         
          transition-all duration-300
        "
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl flex">
              <p className="text-slate-900 dark:text-white">
                FIZZY
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  .ru
                </span>
              </p>
            </div>

            <nav className="flex items-center gap-4">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Программа
              </Link>
              <Link
                href="/about"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <i className="fi fi-rr-menu-burger text-2xl flex items-center"></i>
              </Link>
            </nav>
          </div>
        </header>

        {/* Отступ для контента */}
        <div className="h-15 md:h-24 lg:h-28"></div>

        <main className="grow">{children}</main>

        <footer className="p-4 text-center text-sm text-slate-600 dark:text-slate-400 bg-transparent">
          <p>© {new Date().getFullYear()} «FIZZY». Все права защищены.</p>
        </footer>
      </body>
    </html>
  );
}
