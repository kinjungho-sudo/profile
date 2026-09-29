import Image from "next/image";
import { profile, stats } from "@/data/content";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">PORTFOLIO</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted">{profile.roleShort}</p>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed">
            {profile.heroLine}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ContactButton className="px-6 py-3 rounded-full bg-accent text-[#0a0a0c] font-semibold text-sm hover:opacity-90 transition-opacity">
              문의하기
            </ContactButton>
            <a
              href="#products"
              className="px-6 py-3 rounded-full border border-border font-semibold text-sm hover:border-foreground/40 transition-colors"
            >
              프로젝트 보기
            </a>
          </div>
        </div>

        <div className="relative w-40 h-56 md:w-56 md:h-80 rounded-2xl overflow-hidden border border-border shrink-0 mx-auto md:mx-0">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="(min-width: 768px) 14rem, 10rem"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-10">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-3xl md:text-4xl font-black">{s.value}</dt>
            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
