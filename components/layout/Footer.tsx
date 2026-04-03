import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏎️</span>
              <span className="text-xl font-bold text-gradient">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              슈퍼카 갤러리, 자동차 퀴즈, 스펙 배틀까지.
              <br />
              자동차 덕후를 위한 인터랙티브 콘텐츠.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">콘텐츠</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.icon} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">정보</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
