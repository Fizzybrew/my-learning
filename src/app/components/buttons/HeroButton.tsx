import Link from 'next/link';

export default function HeroButton() {
  return (
    <Link
      href="/courses"
      className="py-6 px-8 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl text-white font-semibold text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
      aria-label="Начать бесплатное обучение"
    >
      Начни бесплатно
    </Link>
  );
}