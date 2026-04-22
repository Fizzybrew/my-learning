import CourseCard from "../components/CourseCard";
import { coursesData } from "../data/courses";

export default function ProgramPage() {
  return (
    <main className="min-h-screen">
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Программа обучения
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Структурированный путь от основ до продвинутых тем
        </p>
      </header>

      <section className="px-4 pb-16" aria-label="Список курсов">
        <div className="max-w-3xl mx-auto space-y-4">
          {coursesData.map(({ id, icon, title }) => (
            <CourseCard key={id} id={id} icon={icon} title={title} />
          ))}
        </div>
      </section>
    </main>
  );
}