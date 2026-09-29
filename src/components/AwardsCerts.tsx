import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { awards, certificates, education, extra } from "@/data/content";

export default function AwardsCerts() {
  return (
    <>
      <section id="awards" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <SectionHeading num="05" title="수상" />
        <div className="space-y-6">
          {awards.map((a) => (
            <div
              key={a.title}
              className="flex flex-col md:flex-row gap-5 border border-border rounded-2xl p-6 bg-card"
            >
              {a.image && (
                <div className="relative w-full md:w-56 h-48 md:h-40 rounded-xl overflow-hidden border border-border shrink-0">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 768px) 14rem, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <span className="text-accent font-semibold">{a.year}</span>
                <span className="mt-1 font-medium text-lg">{a.title}</span>
                <span className="mt-1 text-sm text-muted">{a.org}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <SectionHeading num="06" title="AI 관련 자격증" />
        <ul className="space-y-2 text-sm">
          {certificates.ai.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <SectionHeading num="07" title="학력 · 교육" />
        {education.school && <p className="font-medium">{education.school}</p>}
        <ul className="mt-6 space-y-4">
          {education.trainings.map((t) => (
            <li key={t.title} className="border-l-2 border-accent/40 pl-4">
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-muted">{t.desc}</p>
            </li>
          ))}
        </ul>

        {(extra.books.length > 0 || extra.activities.length > 0) && (
          <div className="mt-10 grid md:grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <p className="text-sm font-semibold text-accent mb-3">저서</p>
              <ul className="space-y-2 text-sm text-muted">
                {extra.books.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-accent mb-3">활동</p>
              <ul className="space-y-2 text-sm text-muted">
                {extra.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
