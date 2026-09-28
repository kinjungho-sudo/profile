"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { products } from "@/data/content";

export default function Products() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="products" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading
        num="03"
        title="AI 프로덕트"
        desc="말이 아니라 작동하는 결과로 증명합니다. 카드를 클릭하면 자세히 볼 수 있습니다."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => {
          const open = openId === p.id;
          return (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(open ? null : p.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpenId(open ? null : p.id);
                }
              }}
              className="cursor-pointer text-left border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-accent/50 transition-colors"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                {p.roleTag}
              </span>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-muted leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {open && (
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm leading-relaxed">{p.detail}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {p.link.replace(/^https?:\/\//, "")} <span>↗</span>
                  </a>
                </div>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                {open ? "접기" : "자세히 보기"} <span>→</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
