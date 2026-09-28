import SectionHeading from "./SectionHeading";
import { cases } from "@/data/content";

export default function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading num="04" title="컨설팅 · 강의 사례" />
      <div className="space-y-4">
        {cases.map((c, i) => (
          <div
            key={c.id}
            className="border border-border rounded-2xl p-6 md:p-8 bg-card grid md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-8 items-start"
          >
            <span className="text-xs font-bold text-accent">
              CASE {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs text-muted mb-1">대상 · 문제</p>
              <p className="font-semibold">{c.title}</p>
              <p className="mt-1 text-sm text-muted">{c.problem}</p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">접근</p>
              <p className="text-sm leading-relaxed">{c.approach}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
