import SectionHeading from "./SectionHeading";
import { career } from "@/data/content";

function CareerBlock({
  tag,
  org,
  title,
  desc,
  bullets,
}: {
  tag: string;
  org: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="border border-border rounded-2xl p-6 md:p-8 bg-card">
      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
        {tag}
      </span>
      <h3 className="mt-4 text-xl font-bold">{org}</h3>
      <p className="text-muted">{title}</p>
      <p className="mt-3 leading-relaxed">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-accent">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Career() {
  return (
    <section id="career" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading num="02" title="경력" />
      <div className="grid md:grid-cols-2 gap-6">
        <CareerBlock
          tag="현재"
          org={career.current.org}
          title={career.current.title}
          desc={career.current.desc}
          bullets={career.current.bullets}
        />
        <CareerBlock
          tag="병행"
          org={career.concurrent.title}
          title={career.concurrent.role}
          desc={career.concurrent.desc}
          bullets={career.concurrent.bullets}
        />
      </div>
    </section>
  );
}
