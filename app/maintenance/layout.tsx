import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '자동차 유지비 계산기 - 월/연간 유지비 계산',
  description:
    '보험, 주유, 주차, 정비 등 모든 비용을 입력하면 월간/연간 자동차 유지비를 자동 계산합니다.',
  keywords: [
    '자동차 유지비 계산기',
    '차량 유지비',
    '월 유지비 계산',
    '자동차 유지비',
  ],
  openGraph: {
    title: '자동차 유지비 계산기 - 카코스트',
    description: '내 차 월/연간 유지비를 한눈에 확인하세요',
    url: `${SITE_URL}/maintenance`,
  },
  alternates: { canonical: '/maintenance' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
