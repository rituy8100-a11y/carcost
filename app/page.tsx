'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import AdBanner from '@/components/ads/AdBanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { label: '수록 차량', value: 20, suffix: '대+' },
  { label: '퀴즈 문항', value: 8, suffix: '문항' },
  { label: '시대별 역사', value: 7, suffix: '개 시대' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-red-400 border border-red-500/20 rounded-full bg-red-500/10">
              자동차 덕후를 위한 공간
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            슈퍼카의 모든 것,
            <br />
            <span className="text-gradient">카코스트</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            슈퍼카 갤러리, 자동차 퀴즈, 스펙 배틀, 타임라인까지.
            <br className="hidden sm:block" />
            자동차를 사랑하는 당신을 위한 인터랙티브 콘텐츠.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/gallery"
              className="px-8 py-3.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              갤러리 둘러보기
            </Link>
            <Link
              href="/quiz"
              className="px-8 py-3.5 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              나에게 맞는 차는?
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AdBanner format="horizontal" className="max-w-5xl mx-auto px-4 mt-12" />

      {/* Feature Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              즐길 거리가 <span className="text-gradient">가득</span>
            </h2>
            <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
              다양한 인터랙티브 콘텐츠로 자동차의 세계를 탐험하세요.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NAV_ITEMS.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.08}>
                <Link href={item.href} className="block group">
                  <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.04] glow-red-hover">
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AdBanner format="horizontal" className="max-w-5xl mx-auto px-4 mb-16" />
    </>
  );
}
