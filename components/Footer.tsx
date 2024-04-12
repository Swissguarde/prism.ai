import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/" className="tracking-widest sm:text-3xl">
        prism.ai
        <span className="sr-only">Prism.ai Home Page</span>
      </Link>
      <nav aria-label="footer">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/features"
              className="inline-flex min-h-11 items-center"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="inline-flex min-h-11 items-center"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
