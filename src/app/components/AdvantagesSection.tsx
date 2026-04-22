import AdvantageItem from "./AdvantageItem";
import { advantages } from "../data/advantages";

export default function AdvantagesSection() {
  return (
    <section className="py-16 bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-black dark:to-purple-950/30">
      <div className="flex flex-wrap justify-center gap-6 md:gap-16">
        {advantages.map((advantage, index) => (
          <AdvantageItem key={index} {...advantage} />
        ))}
      </div>
    </section>
  );
}