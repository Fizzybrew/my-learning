import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon: string;
}

export default function CourseCard({
  id,
  title,
  subtitle,
  gradient,
  icon,
}: CourseCardProps) {
  return (
    <article
      className={`w-full p-6 rounded-2xl bg-linear-to-r ${gradient} text-white shadow-lg`}
      aria-labelledby={`course-${id}`}
    >
      <div className="flex items-center gap-5">
        <figure>
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="w-14 h-14 bg-white rounded-xl p-2"
            aria-hidden="true"
          />
        </figure>
        <div>
          <h3 id={`course-${id}`} className="text-2xl font-bold">
            {title}
          </h3>
          <p className="text-white/80">{subtitle}</p>
        </div>
      </div>
    </article>
  );
}