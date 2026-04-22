import HeroButton from "./buttons/HeroButton";

export default function HeroSection() {
  return (
    <header className="relative -mt-10 min-h-screen flex flex-col items-center justify-center gap-6 lg:text-center p-10">
      <h1 className="text-6xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-4xl">
        Развивайте свои навыки{" "}
        <span className="text-indigo-600 dark:text-indigo-400">бесплатно</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl">
        создавая современные веб-приложения и повышайте свой профессиональный
        уровень, обучаясь JavaScript, HTML, CSS и React
      </p>
      
      <HeroButton />
      
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2">
        <svg
          className="w-6 h-6 text-slate-400 dark:text-slate-500"
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
  );
}