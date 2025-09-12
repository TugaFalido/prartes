"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home Page" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="mt-3 flex w-full justify-center">
        <ul className="list-none flex items-center gap-8 rounded-full bg-black/10 px-5 py-2 backdrop-blur">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "text-sm text-white/90 hover:text-white transition",
                  pathname === l.href && "font-semibold"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
