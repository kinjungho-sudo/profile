// =====================================================================
// 프로필 콘텐츠 — 정호님이 텍스트를 주시면 이 파일만 채우면 됩니다.
// [수정 필요] 표시된 곳을 실제 내용으로 교체하세요.
// =====================================================================

export const profile = {
  name: "김정호", // [수정 필요]
  roleShort: "CoMindWorks 대표 · AI 강사", // [수정 필요]
  location: "Seoul, Korea", // [수정 필요]
  heroLine:
    "현장에서 검증한 AI 강의와 제품으로, 실무의 속도를 바꿉니다.", // [수정 필요] — 레퍼런스: "대기업 ERP 구축의 깊이 위에, AI로 비즈니스를 다시 설계합니다."
  quote:
    "“미래는 이미 와 있다. 다만 고르게 퍼져 있지 않을 뿐이다.”", // [수정 필요] — 원하시면 다른 문구로 교체
  philosophy:
    "AI는 이미 와 있습니다. 다만 아직, 모두의 현장에는 닿지 않았습니다.\n저는 그 거리를 좁힙니다.\n강의실이 아니라 현장에서, AI가 실제로 일하게 만드는 일을 합니다.", // [수정 필요]
  email: "kinjungho@gmail.com",
};

export const stats = [
  { value: "-", label: "AI 강의 경력" }, // [수정 필요]
  { value: "-", label: "누적 수강생" }, // [수정 필요]
  { value: "1", label: "자체 AI 제품 (Parro)" }, // [수정 필요]
  { value: "-", label: "기업 강의·컨설팅" }, // [수정 필요]
];

export const about = {
  role: "CoMindWorks(코마인드웍스) 대표 · AI 강사", // [수정 필요]
};

export const career = {
  current: {
    org: "CoMindWorks", // [수정 필요]
    title: "대표", // [수정 필요]
    desc: "AI 강의와 AI 솔루션 제품(Parro 등)을 기획·제작·운영합니다.", // [수정 필요]
    bullets: [
      "[수정 필요] 예: OO 기업/기관 AI 강의 진행",
      "[수정 필요] 예: Parro 기획·개발·운영",
    ],
  },
  concurrent: {
    title: "병행 활동", // [수정 필요]
    role: "AI 컨설턴트", // [수정 필요]
    desc: "[수정 필요] 병행하시는 활동을 설명해주세요.",
    bullets: [
      "[수정 필요] 사례 1",
      "[수정 필요] 사례 2",
    ],
  },
};

export type Product = {
  id: string;
  name: string;
  roleTag: string; // 예: "기획 · 제작"
  summary: string;
  tags: string[];
  detail: string;
};

export const products: Product[] = [
  {
    id: "parro",
    name: "Parro",
    roleTag: "기획 · 제작 · 운영", // [수정 필요]
    summary: "[수정 필요] Parro 한 줄 설명을 넣어주세요.",
    tags: ["AI 솔루션"], // [수정 필요]
    detail: "[수정 필요] Parro 상세 설명 (문제 정의 → 접근 → 결과).",
  },
  // [수정 필요] 다른 제품이 있다면 여기에 같은 형식으로 추가
];

export type Case = {
  id: string;
  title: string;
  problem: string;
  approach: string;
};

export const cases: Case[] = [
  {
    id: "case-01",
    title: "[수정 필요] 사례명 / 대상",
    problem: "[수정 필요] 대상 문제",
    approach: "[수정 필요] 접근 방식",
  },
];

export const awards = [
  { year: "-", title: "[수정 필요] 수상 내역", org: "[수정 필요] 주최" },
];

export const certificates = {
  ai: ["[수정 필요] AI 관련 자격증"],
  etc: ["[수정 필요] 기타 자격증"],
};

export const education = {
  school: "[수정 필요] 학교 · 전공",
  trainings: [
    { title: "[수정 필요] 교육 수료명", desc: "[수정 필요] 설명" },
  ],
};

export const extra = {
  books: ["[수정 필요] 저서가 있다면"],
  activities: ["[수정 필요] 기타 활동"],
};
