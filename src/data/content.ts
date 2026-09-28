// =====================================================================
// 프로필 콘텐츠 — 정호님 실제 이력 반영본
// =====================================================================

export const profile = {
  name: "김정호",
  roleShort: "AI 강사 · 前 네트워크 보안 엔지니어",
  location: "Seoul, Korea",
  heroLine: "14년 보안 엔지니어의 현장 감각으로, AI를 실무에 붙입니다.",
  quote: "“미래는 이미 와 있다. 다만 고르게 퍼져 있지 않을 뿐이다.”",
  philosophy:
    "AI는 이미 와 있습니다. 다만 아직, 모두의 현장에는 닿지 않았습니다.\n저는 그 거리를 좁힙니다.\n보안 엔지니어로 다져온 문제 해결력으로, AI가 실제로 일하게 만드는 일을 합니다.",
  email: "kinjungho@gmail.com",
  photo: "/profile.webp",
};

export const stats = [
  { value: "14년", label: "네트워크 보안 엔지니어 경력" },
  { value: "4개사", label: "보안 기업 재직" },
  { value: "1", label: "AI 강의 (재직자 대상)" },
  { value: "우수상", label: "2026 KDT 해커톤" },
];

export const about = {
  role: "AI 강사 · 前 네트워크 보안 엔지니어 · 기획자",
};

export const career = {
  current: {
    org: "AI 강의 · 노코드 자동화",
    title: "AI 강사",
    desc: "재직자를 대상으로 클로드(Claude)를 활용한 노코드 업무 자동화 강의를 진행했습니다.",
    bullets: [
      "경제과학진흥원 — 재직자 대상 '클로드 활용 노코드 업무 자동화' 강의 (2026.09.21~09.22)",
      "2026 KDT 해커톤 우수상 수상 (2026.09.02~09.04)",
    ],
  },
  concurrent: {
    title: "네트워크 보안 엔지니어 · 기획자",
    role: "14년 경력",
    desc: "네트워크 보안 기업에서 기획자와 엔지니어로 재직하며 현장 문제 해결 경험을 쌓았습니다.",
    bullets: [
      "(주)시큐아이",
      "(주)엑스게이트",
      "(주)퓨쳐시스템",
      "(주)넥스지",
    ],
  },
};

export type Product = {
  id: string;
  name: string;
  roleTag: string;
  summary: string;
  tags: string[];
  detail: string;
  link: string;
};

export const products: Product[] = [
  {
    id: "parro",
    name: "Parro",
    roleTag: "기획 · 제작 · 운영",
    summary:
      "한 번의 시연을 AI가 단계별 실습 가이드로 자동 변환하는 AI 실습 교육 솔루션.",
    tags: ["AI EdTech", "실습 가이드 자동화", "강사 대시보드"],
    detail:
      "강사가 화면에서 한 번 시연(클릭·화면 기록)하면 Parro가 이를 AI로 단계별 카드 매뉴얼로 자동 정리합니다. 제목·설명·강조 표시를 편집기에서 다듬은 뒤 링크 하나로 공유하면, 학습자는 실제 화면 위에서 단계를 따라 반복 실습할 수 있습니다. 강사는 실시간 대시보드로 수강생별 진행 상태와 도움 요청을 확인하고, 여러 가이드를 플레이북으로 묶어 클래스·워크스페이스 단위로 운영할 수 있습니다. PDF·PPTX·Word 내보내기도 지원합니다. 기업 SOP·직무교육, 신입 온보딩, AI배움터·시니어 교육, 대학·KDT 등 실습 중심 교육 현장에 적용됩니다.",
    link: "https://parro-guide.vercel.app/landingpage",
  },
];

export type Case = {
  id: string;
  title: string;
  problem: string;
  approach: string;
  image?: string;
};

export const cases: Case[] = [
  {
    id: "case-01",
    title: "경제과학진흥원 재직자 대상 강의",
    problem: "비개발 직군 재직자들이 반복 업무를 자동화할 도구가 마땅치 않음",
    approach:
      "클로드(Claude)를 활용한 노코드 업무 자동화 방법을 2일간(2026.09.21~22) 직접 실습 중심으로 교육",
    image: "/lecture.webp",
  },
];

export const awards = [
  {
    year: "2026",
    title: "KDT 해커톤 우수상",
    org: "고용노동부 장관상 · 2026.09.02 ~ 09.04",
    image: "/award.webp",
  },
];

export const certificates = {
  ai: [] as string[], // [수정 필요] AI 관련 자격증이 있다면 추가
  etc: ["CCNA"],
};

export const education = {
  school: "", // 학교·전공 비공개
  trainings: [
    {
      title: "오즈코딩스쿨 수료",
      desc: "AI리더양성 부트캠프 4개월 과정 수료",
    },
  ],
};

export const extra = {
  books: [] as string[],
  activities: [] as string[],
};
