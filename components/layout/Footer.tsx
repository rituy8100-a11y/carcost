import Link from 'next/link';
import { CALCULATORS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">카코스트</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              자동차 비용을 한눈에 계산하세요.
              연비, 주유비, 자동차세, 유지비 계산기를 무료로 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">계산기</h3>
            <ul className="space-y-2">
              {CALCULATORS.map((calc) => (
                <li key={calc.href}>
                  <Link
                    href={calc.href}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {calc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">안내</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              본 사이트의 계산 결과는 참고용이며, 실제 금액과 차이가 있을 수 있습니다.
              정확한 세금 정보는 관할 시/군/구청에 문의하세요.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} 카코스트. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
