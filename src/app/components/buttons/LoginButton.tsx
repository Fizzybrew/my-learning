import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link
      href="/profile"
      className="inline-flex items-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
      aria-label="Войти чтобы сохранить прогресс"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
      Войти и сохранить прогресс
    </Link>
  );
}