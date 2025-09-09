"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container-px py-3 flex items-center justify-between">
        <Link href="/" className="font-black tracking-[0.25em] text-xl">
          P<span className="opacity-80">RARTES</span>
        </Link>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu size={22} />
        </button>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "text-sm hover:opacity-100 opacity-80 transition",
                  pathname === l.href && "opacity-100 underline underline-offset-8"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden container-px pb-4 pt-2 space-y-2 bg-black/60">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "block py-2 text-sm opacity-90",
                  pathname === l.href && "font-semibold underline underline-offset-8"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
