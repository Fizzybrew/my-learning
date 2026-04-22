import Image from "next/image";

interface CourseCardProps {
  id: string;
  icon: string;
  title: string;
}

export default function CourseCard({ id, icon, title }: CourseCardProps) {
  return (
    <article
      className="w-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
      aria-labelledby={`course-${id}`}
    >
      <div className="flex items-center gap-5">
        <figure>
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl p-2"
            aria-hidden="true"
          />
        </figure>
        <div>
          <h3
            id={`course-${id}`}
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}