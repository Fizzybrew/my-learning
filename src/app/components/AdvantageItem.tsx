interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AdvantageItem({ icon, title, description }: AdvantageItemProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-40">
      <div className="w-16 h-16 text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-center">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-center">{description}</p>
    </div>
  );
}