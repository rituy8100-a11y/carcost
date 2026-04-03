'use client';

import { motion } from 'framer-motion';
import { timelineData } from '@/lib/data/timeline-data';
import { cars } from '@/lib/data/cars';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AdBanner from '@/components/ads/AdBanner';

export default function TimelinePage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            자동차 <span className="text-gradient">타임라인</span>
          </h1>
          <p className="text-gray-500 text-center mb-14">
            1960년대부터 현재까지, 자동차 역사의 하이라이트
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

          {timelineData.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const entryCars = entry.cars
              .map((id) => cars.find((c) => c.id === id))
              .filter(Boolean);

            return (
              <div key={entry.decade} className="relative mb-16">
                {/* Decade marker */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 items-center justify-center z-10">
                  <span className="text-xs font-bold text-white">{entry.decade}</span>
                </div>

                <ScrollReveal direction={isLeft ? 'left' : 'right'} delay={0.1}>
                  <div className={`md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="glass rounded-2xl p-6">
                      <span className="inline-block md:hidden px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-xs font-bold text-white mb-3">
                        {entry.decade}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{entry.description}</p>

                      <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-sm text-red-400 font-medium">{entry.highlight}</p>
                      </div>

                      {entryCars.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entryCars.map((car) => car && (
                            <span key={car.id} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                              {car.nameKo}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-8 rounded-full bg-white/10 items-center justify-center"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
          </motion.div>
        </div>

        <AdBanner format="horizontal" className="mt-8" />
      </div>
    </section>
  );
}
