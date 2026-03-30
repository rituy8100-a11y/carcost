import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '연비 계산기 - 내 차 실연비 계산',
  description:
    '주행거리와 주유량을 입력하면 내 차의 실제 연비(km/L)를 자동으로 계산합니다. 무료 연비 계산기.',
  keywords: ['연비 계산기', '자동차 연비 계산', '실연비 계산', 'km/L 계산'],
  openGraph: {
    title: '연비 계산기 - 카코스트',
    description: '주행거리와 주유량으로 내 차 연비를 계산하세요',
    url: `${SITE_URL}/fuel-efficiency`,
  },
  alternates: { canonical: '/fuel-efficiency' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
