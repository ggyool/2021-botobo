const ROUTE = {
  HOME: {
    PATH: '/',
  },
  LOGIN: {
    PATH: '/login',
    TITLE: '로그인',
  },
  QUIZ_SETTING: {
    PATH: '/quizSetting',
    TITLE: '퀴즈 설정',
  },
  QUIZ: {
    PATH: '/quiz',
    TITLE: '퀴즈',
  },
  QUIZ_RESULT: {
    PATH: '/quizResult',
    TITLE: '퀴즈 결과',
  },
  CARDS: {
    PATH: '/cards',
    TITLE: '모아보기',
  },
  PUBLIC_WORKBOOK: {
    PATH: '/publicWorkbook',
    TITLE: '공유 문제집',
  },
  PUBLIC_CARDS: {
    PATH: '/publicCards',
    TITLE: '문제집 상세',
  },
  GITHUB_CALLBACK: {
    PATH: '/github/callback',
  },
} as const;

export default ROUTE;
