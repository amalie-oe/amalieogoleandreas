"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#hjem", label: "Hjem" },
  { href: "#velkommen", label: "Velkommen" },
  { href: "#program", label: "Program" },
  { href: "#praktisk", label: "Praktisk info" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-mist/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hjem" aria-label="Til toppen" className="relative block h-5 w-10">
          <img
            src="/monogram-cream.png"
            alt=""
            className={`absolute inset-0 h-5 w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="/monogram-steel.png"
            alt="Amalie og Ole Andreas"
            className={`absolute inset-0 h-5 w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>


        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-slate ${
                  scrolled ? "text-steel" : "text-mist"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-steel" : "text-mist"}`}
          aria-label="Meny"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 bg-mist px-6 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-xs uppercase tracking-[0.2em] text-steel hover:text-slate"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
