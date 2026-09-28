import SectionHeading from "./SectionHeading";
import { awards, certificates, education, extra } from "@/data/content";

export default function AwardsCerts() {
  return (
    <>
      <section id="awards" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <SectionHeading num="05" title="수상" />
        <ul className="space-y-3">
          {awards.map((a) => (
            <li
              key={a.title}
              className="flex flex-wrap items-baseline gap-x-3 border-b border-border pb-3"
            >
              <span className="text-accent font-semibold">{a.year}</span>
              <span className="font-medium">{a.title}</span>
              <span className="text-sm text-muted">{a.org}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <SectionHeading num="06" title="자격증" />
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.ai.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-accent mb-3">AI</p>
              <ul className="space-y-2 text-sm">
                {certificates.ai.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-accent mb-3">기타</p>
            <ul className="space-y-2 text-sm">
              {certificates.etc.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
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
