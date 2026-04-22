import TechCard from "./TechCard";
import { coursesData } from "../data/courses";

export default function TechSection() {
  return (
    <section className="flex flex-col gap-6 px-5 py-16" aria-label="Преимущества обучения">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
        Почему стоит начать?
      </h2>
      <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-8">
        Четыре столпа современной веб-разработки
      </p>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {coursesData.map((course) => (
          <TechCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}