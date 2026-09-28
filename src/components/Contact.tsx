import SectionHeading from "./SectionHeading";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-28">
      <SectionHeading num="08" title="문의하기" desc="문의, 협업, 커피챗 등 어떤 이야기든 환영합니다." />
      <div className="border border-border rounded-2xl p-8 md:p-12 bg-card text-center">
        <p className="text-muted">
          귀사의 상황에 맞는 서비스를 제안드립니다.
          <br />
          문의 내용을 남겨주시면 빠른 시간 안에 회신드리겠습니다!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-[#0a0a0c] font-semibold hover:opacity-90 transition-opacity"
        >
          문의하기 <span>→</span>
        </a>
      </div>
      <footer className="mt-16 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}
