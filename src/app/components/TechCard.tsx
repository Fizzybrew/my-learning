import Image from "next/image";

interface TechCardProps {
  id: string;
  subtitle: string;
  description: string;
  icon: string;
  colorGradient: string;
}

export default function TechCard({
  id,
  subtitle,
  description,
  icon,
  colorGradient,
}: TechCardProps) {
  return (
    <article
      className={`group relative p-0.5 rounded-2xl bg-transparent hover:bg-linear-to-r ${colorGradient} transition-all duration-700 ease-out h-full`}
      aria-labelledby={id}
    >
      <div className="bg-white/90 dark:bg-slate-900/90 md:backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:shadow-md transition-shadow duration-700 h-full">
        <figure className="shrink-0">
          <Image
            src={icon}
            alt=""
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 group-hover:scale-105 transition-transform duration-500 ease-out"
            aria-hidden="true"
          />
        </figure>
        <div>
          <h3
            id={id}
            className="text-slate-900 dark:text-white font-semibold text-lg mb-1 leading-tight"
          >
            {subtitle}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}