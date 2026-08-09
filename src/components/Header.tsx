import Link from "next/link";

const NAV_LINKS = [
  { href: "/#mission", label: "Mission" },
  { href: "/#schulen", label: "Schulen" },
  { href: "/#angebote", label: "Angebote" },
  { href: "/ki-tools", label: "KI-Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/#mitmachen", label: "Mitmachen" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            KI im Saalekreis e.V.
          </span>
          <span className="hidden text-xs font-medium text-slate-500 sm:inline">
            in Gründung
          </span>
        </Link>

        <nav className="hidden gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#kontakt"
          className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </header>
  );
}
