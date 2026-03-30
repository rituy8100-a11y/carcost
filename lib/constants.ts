import { CalculatorInfo } from './types';

export const SITE_NAME = '카코스트';
export const SITE_URL = 'https://carcost.vercel.app';
export const SITE_DESCRIPTION = '자동차 연비, 주유비, 자동차세, 유지비를 한번에 계산하세요. 무료 자동차 비용 계산기';

export const FUEL_TYPES = [
  { label: '휘발유', price: 1650 },
  { label: '경유', price: 1450 },
  { label: 'LPG', price: 1000 },
] as const;

export const POPULAR_CARS = [
  { label: '모닝 (998cc)', displacement: 998 },
  { label: '아반떼 (1,598cc)', displacement: 1598 },
  { label: '쏘나타 (1,999cc)', displacement: 1999 },
  { label: '그랜저 (2,497cc)', displacement: 2497 },
  { label: 'K5 (1,598cc)', displacement: 1598 },
  { label: '투싼 (1,598cc)', displacement: 1598 },
  { label: '싼타페 (2,199cc)', displacement: 2199 },
  { label: '제네시스 G80 (2,497cc)', displacement: 2497 },
  { label: '제네시스 G90 (3,778cc)', displacement: 3778 },
] as const;

export const NON_COMMERCIAL_TAX_RATES = [
  { maxCC: 1000, ratePerCC: 80 },
  { maxCC: 1600, ratePerCC: 140 },
  { maxCC: Infinity, ratePerCC: 200 },
] as const;

export const COMMERCIAL_TAX_RATES = [
  { maxCC: 1000, ratePerCC: 18 },
  { maxCC: 1600, ratePerCC: 18 },
  { maxCC: Infinity, ratePerCC: 19 },
] as const;

export const EV_TAX = {
  NON_COMMERCIAL: 100000,
  COMMERCIAL: 20000,
} as const;

export const LOCAL_EDUCATION_TAX_RATE = 0.3;

export const CALCULATORS: CalculatorInfo[] = [
  {
    title: '연비 계산기',
    description: '주행거리와 주유량으로 내 차 연비를 계산하세요',
    href: '/fuel-efficiency',
    icon: '⛽',
    color: 'bg-blue-500',
  },
  {
    title: '주유비 계산기',
    description: '목적지까지 필요한 주유비를 미리 계산하세요',
    href: '/fuel-cost',
    icon: '💰',
    color: 'bg-green-500',
  },
  {
    title: '자동차세 계산기',
    description: '배기량과 차령으로 연간 자동차세를 확인하세요',
    href: '/car-tax',
    icon: '🏛️',
    color: 'bg-purple-500',
  },
  {
    title: '유지비 계산기',
    description: '보험, 주유, 정비, 주차 등 총 유지비를 계산하세요',
    href: '/maintenance',
    icon: '🔧',
    color: 'bg-orange-500',
  },
];
