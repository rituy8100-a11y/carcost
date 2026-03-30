import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '주유비 계산기 - 예상 기름값 계산',
  description:
    '주행거리, 연비, 유가를 입력하면 필요한 주유비를 자동으로 계산합니다. 무료 주유비 계산기.',
  keywords: ['주유비 계산기', '기름값 계산', '연료비 계산기', '주유비 계산'],
  openGraph: {
    title: '주유비 계산기 - 카코스트',
    description: '목적지까지 필요한 주유비를 미리 계산하세요',
    url: `${SITE_URL}/fuel-cost`,
  },
  alternates: { canonical: '/fuel-cost' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
