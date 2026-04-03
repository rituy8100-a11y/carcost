import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - 자동차 덕후를 위한 인터랙티브 콘텐츠`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    '슈퍼카',
    '자동차 퀴즈',
    '스펙 비교',
    '자동차 갤러리',
    '드림카',
    '카코스트',
    '자동차 타임라인',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - 자동차 덕후를 위한 인터랙티브 콘텐츠`,
    description: SITE_DESCRIPTION,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="ko" className="dark">
      <head>
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={`${notoSansKR.className} antialiased min-h-screen flex flex-col bg-brand-dark text-gray-100`}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
