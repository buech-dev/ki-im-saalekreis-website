"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
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

        <div className="flex items-center gap-3">
          <Link
            href="/#kontakt"
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 sm:inline-block"
          >
            Kontakt aufnehmen
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 block rounded-full bg-blue-900 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Kontakt aufnehmen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
