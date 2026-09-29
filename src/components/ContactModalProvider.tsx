"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { profile } from "@/data/content";

type ContactModalContextValue = {
  openModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

export default function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = `[상담 문의] ${name}님`;
    const body = [
      `이름: ${name}`,
      `이메일: ${email}`,
      phone ? `연락처: ${phone}` : null,
      "",
      "문의 내용:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
    closeModal();
  };

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="닫기"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-background overflow-hidden shadow-2xl">
            <div className="bg-card px-8 py-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">상담 문의</h3>
                  <p className="mt-1 text-sm text-muted">
                    귀사의 상황에 맞는 AI 서비스를 제안드립니다
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="닫기"
                  className="text-muted hover:text-foreground transition-colors text-xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    이름 <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-muted"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    이메일 <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-muted"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                  연락처 (선택)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors placeholder:text-muted"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  문의 내용 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요."
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none placeholder:text-muted"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent text-[#0a0a0c] font-semibold py-3 text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                상담 신청하기 <span>→</span>
              </button>
              <p className="text-xs text-muted text-center">
                신청하기를 누르면 메일 앱이 열리며, {profile.email}로 바로 보내실 수 있습니다.
              </p>
            </form>
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
