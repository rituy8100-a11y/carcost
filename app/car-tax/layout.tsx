import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '자동차세 계산기 2026 - 배기량별 자동차세 조회',
  description:
    '배기량과 차령을 입력하면 자동차세, 지방교육세를 자동 계산합니다. 비영업용/영업용, 전기차 자동차세까지 한번에 확인하세요.',
  keywords: [
    '자동차세 계산기',
    '자동차세 계산',
    '배기량 자동차세',
    '자동차세 조회',
    '2026 자동차세',
  ],
  openGraph: {
    title: '자동차세 계산기 2026 - 카코스트',
    description: '배기량별 자동차세를 간편하게 계산하세요',
    url: `${SITE_URL}/car-tax`,
  },
  alternates: { canonical: '/car-tax' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
