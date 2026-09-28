"use client";

import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "소개" },
  { href: "#career", label: "경력" },
  { href: "#products", label: "프로덕트" },
  { href: "#cases", label: "사례" },
  { href: "#contact", label: "문의" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-[#0a0a0c] hover:opacity-90 transition-opacity"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
