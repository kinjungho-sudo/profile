import SectionHeading from "./SectionHeading";
import { profile, about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading num="01" title="소개" />
      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-muted">이름</dt>
            <dd className="font-medium">{profile.name}</dd>
          </div>
          <div>
            <dt className="text-muted">역할</dt>
            <dd className="font-medium">{about.role}</dd>
          </div>
          <div>
            <dt className="text-muted">위치</dt>
            <dd className="font-medium">{profile.location}</dd>
          </div>
        </dl>
        <div>
          <blockquote className="text-lg md:text-xl font-semibold leading-relaxed">
            {profile.quote}
          </blockquote>
          <p className="mt-6 whitespace-pre-line text-muted leading-relaxed">
            {profile.philosophy}
          </p>
        </div>
      </div>
    </section>
  );
}
