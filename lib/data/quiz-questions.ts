import { QuizQuestion, QuizResult } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '주말 아침, 당신은 무엇을 하고 있나요?',
    options: [
      { text: '서킷 드라이빙 체험 예약 완료', scores: { speed: 3, classic: 0, luxury: 0, eco: 0 } },
      { text: '클래식카 전시회 구경', scores: { speed: 0, classic: 3, luxury: 1, eco: 0 } },
      { text: '호텔 라운지에서 브런치', scores: { speed: 0, classic: 1, luxury: 3, eco: 0 } },
      { text: '자연 속 전기차 드라이브', scores: { speed: 1, classic: 0, luxury: 1, eco: 3 } },
    ],
  },
  {
    id: 2,
    question: '차에서 가장 중요한 것은?',
    options: [
      { text: '0-100km/h 가속 시간', scores: { speed: 3, classic: 0, luxury: 0, eco: 0 } },
      { text: '디자인과 역사적 가치', scores: { speed: 0, classic: 3, luxury: 1, eco: 0 } },
      { text: '실내 퀄리티와 승차감', scores: { speed: 0, classic: 0, luxury: 3, eco: 1 } },
      { text: '효율성과 친환경', scores: { speed: 0, classic: 0, luxury: 0, eco: 3 } },
    ],
  },
  {
    id: 3,
    question: '좋아하는 영화 장르는?',
    options: [
      { text: '분노의 질주 같은 액션', scores: { speed: 3, classic: 0, luxury: 0, eco: 0 } },
      { text: '포드 v 페라리 같은 실화', scores: { speed: 1, classic: 3, luxury: 0, eco: 0 } },
      { text: '그레이트 개츠비 같은 드라마', scores: { speed: 0, classic: 1, luxury: 3, eco: 0 } },
      { text: '인터스텔라 같은 SF', scores: { speed: 1, classic: 0, luxury: 0, eco: 3 } },
    ],
  },
  {
    id: 4,
    question: '드림카 색상을 고른다면?',
    options: [
      { text: '페라리 레드 🔴', scores: { speed: 3, classic: 1, luxury: 0, eco: 0 } },
      { text: '브리티시 레이싱 그린 🟢', scores: { speed: 0, classic: 3, luxury: 1, eco: 1 } },
      { text: '미드나잇 블랙 ⚫', scores: { speed: 1, classic: 0, luxury: 3, eco: 0 } },
      { text: '매트 화이트 ⚪', scores: { speed: 0, classic: 0, luxury: 1, eco: 3 } },
    ],
  },
  {
    id: 5,
    question: '이상적인 드라이빙 코스는?',
    options: [
      { text: '뉘르부르크링 서킷', scores: { speed: 3, classic: 1, luxury: 0, eco: 0 } },
      { text: '이탈리아 해안도로', scores: { speed: 1, classic: 3, luxury: 1, eco: 0 } },
      { text: '모나코 시내 크루징', scores: { speed: 0, classic: 0, luxury: 3, eco: 0 } },
      { text: '노르웨이 피오르드 투어', scores: { speed: 0, classic: 0, luxury: 1, eco: 3 } },
    ],
  },
  {
    id: 6,
    question: '엔진 사운드 vs 정숙함?',
    options: [
      { text: 'V8 배기음에 소름이 돋는다', scores: { speed: 3, classic: 1, luxury: 0, eco: 0 } },
      { text: 'V12 자연흡기의 하이톤이 최고', scores: { speed: 1, classic: 3, luxury: 0, eco: 0 } },
      { text: '조용하고 부드러운 게 좋다', scores: { speed: 0, classic: 0, luxury: 3, eco: 1 } },
      { text: '전기모터의 미래적 사운드', scores: { speed: 1, classic: 0, luxury: 0, eco: 3 } },
    ],
  },
  {
    id: 7,
    question: '차에 얼마까지 쓸 수 있다면?',
    options: [
      { text: '10억 이상 — 성능이 최우선', scores: { speed: 3, classic: 0, luxury: 1, eco: 0 } },
      { text: '돈이 문제가 아니라 희소성이 중요', scores: { speed: 0, classic: 3, luxury: 1, eco: 0 } },
      { text: '최고급 옵션 풀로 뽑는다', scores: { speed: 0, classic: 0, luxury: 3, eco: 0 } },
      { text: '합리적인 가격에 최고의 기술', scores: { speed: 0, classic: 0, luxury: 0, eco: 3 } },
    ],
  },
  {
    id: 8,
    question: '자동차에 대한 당신의 철학은?',
    options: [
      { text: '한계를 넘는 속도의 쾌감', scores: { speed: 3, classic: 0, luxury: 0, eco: 0 } },
      { text: '시간이 지나도 변치 않는 가치', scores: { speed: 0, classic: 3, luxury: 1, eco: 0 } },
      { text: '삶의 품격을 높여주는 동반자', scores: { speed: 0, classic: 0, luxury: 3, eco: 0 } },
      { text: '더 나은 미래를 위한 혁신', scores: { speed: 0, classic: 0, luxury: 0, eco: 3 } },
    ],
  },
];

export const quizResults: QuizResult[] = [
  {
    id: 'speed',
    title: '스피드 중독자',
    description: '당신은 순수한 퍼포먼스를 추구합니다. 0-100 가속, 최고속도, 서킷 랩타임에 열광하는 진정한 속도 마니아!',
    matchedCar: 'ferrari-sf90',
    traits: ['도전적', '열정적', '대담한', '기술 매니아'],
  },
  {
    id: 'classic',
    title: '클래식카 감정가',
    description: '당신은 자동차의 역사와 디자인에 깊은 존경을 가지고 있습니다. 시간이 지나도 빛나는 진정한 가치를 알아보는 눈!',
    matchedCar: 'ferrari-250-gto',
    traits: ['우아한', '지적인', '감성적', '수집가 기질'],
  },
  {
    id: 'luxury',
    title: '럭셔리 크루저',
    description: '당신에게 차는 단순한 이동수단이 아닌 라이프스타일입니다. 최고의 품질과 세련된 감각을 추구하는 프리미엄 취향!',
    matchedCar: 'rolls-royce-spectre',
    traits: ['세련된', '고급 취향', '여유로운', '디테일리스트'],
  },
  {
    id: 'eco',
    title: '미래 혁신가',
    description: '당신은 자동차의 미래를 꿈꿉니다. 전기차의 놀라운 기술과 지속 가능한 모빌리티에 진심인 혁신가!',
    matchedCar: 'rimac-nevera',
    traits: ['혁신적', '미래지향적', '합리적', '기술 선도자'],
  },
];
