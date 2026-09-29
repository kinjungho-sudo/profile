// =====================================================================
// 프로필 콘텐츠 — 정호님 실제 이력 반영본
// =====================================================================

export const profile = {
  name: "김정호",
  roleShort: "AI 강사 · 前 네트워크 보안 엔지니어",
  location: "Seoul, Korea",
  heroLine: "14년 보안 엔지니어의 현장 감각으로, AI를 실무에 붙입니다.",
  quote: "“14년간 지킨 건 시스템이었고, 이제 만드는 건 가능성입니다.”",
  philosophy:
    "보안 엔지니어로 14년, 저는 늘 '무엇이 잘못될 수 있는가'를 먼저 물었습니다.\n이제는 'AI로 무엇이 가능해지는가'를 묻습니다.\n현장에서 검증된 문제 해결력으로, AI가 실제로 일하게 만듭니다.",
  email: "kinjungho@gmail.com",
  photo: "/profile.webp",
  siteUrl: "https://profile-sigma-ten-11.vercel.app",
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
    tags: ["AI EdTech", "실습 가이드 자동화"],
    detail:
      "강사가 화면을 한 번 시연하면 AI가 단계별 카드 매뉴얼로 자동 정리하고, 학습자는 실제 화면 위에서 따라 실습합니다. 강사 대시보드로 진행 상태도 실시간 확인합니다.",
    link: "https://parro-guide.vercel.app/landingpage",
  },
  {
    id: "sparring-ai",
    name: "스파링 AI",
    roleTag: "기획 · 제작 · 운영",
    summary: "혼자 결정하기 어려운 고민을 두 AI의 찬반 토론으로 풀어주는 의사결정 보조 AI.",
    tags: ["의사결정 AI", "AI 토론", "모의 면접"],
    detail:
      "RED AI가 찬성, BLUE AI가 반대 근거를 제시하며 토론하고 사회자 AI가 팩트를 검증해 중립적 리포트를 제공합니다. 모의 면접 연습에도 활용할 수 있습니다.",
    link: "https://sparring-ai-ten.vercel.app/",
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
  ai: ["인공지능(AI) 전문가 1급", "생성형AI활용능력전문가 1급"],
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
