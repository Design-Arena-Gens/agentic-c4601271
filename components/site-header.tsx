"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/report", label: "Report Lost Item" },
  { href: "/found", label: "View Found Items" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur border-b border-slate-200 fixed top-0 left-0 right-0 z-20">
      <div className="container py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary text-white font-semibold rounded-full px-4 py-2 shadow-sm">
            NSUT
          </div>
          <div>
            <p className="font-heading text-lg leading-tight">
              Lost &amp; Found Portal
            </p>
            <p className="text-xs text-slate-500">
              Netaji Subhas University of Technology
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
