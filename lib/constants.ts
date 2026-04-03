import { NavItem } from './types';

export const SITE_NAME = '카코스트';
export const SITE_URL = 'https://carcost-five.vercel.app';
export const SITE_DESCRIPTION = '슈퍼카 갤러리, 자동차 퀴즈, 스펙 배틀까지. 자동차 덕후를 위한 인터랙티브 콘텐츠';

export const NAV_ITEMS: NavItem[] = [
  { title: '슈퍼카 갤러리', href: '/gallery', icon: '🏎️', description: '아이코닉 슈퍼카 컬렉션' },
  { title: '자동차 퀴즈', href: '/quiz', icon: '🧩', description: '나에게 맞는 차는?' },
  { title: '스펙 배틀', href: '/battle', icon: '⚔️', description: '두 차의 스펙 대결' },
  { title: '타임라인', href: '/timeline', icon: '📅', description: '자동차 역사 여행' },
  { title: '드림카 빌더', href: '/builder', icon: '🎨', description: '나만의 드림카 만들기' },
];
