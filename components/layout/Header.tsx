'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CALCULATORS } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          카코스트
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {calc.title}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-gray-600 hover:text-blue-600 border-b border-gray-50 last:border-0"
            >
              {calc.icon} {calc.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
