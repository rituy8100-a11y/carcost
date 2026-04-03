'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cars } from '@/lib/data/cars';
import { Car } from '@/lib/types';
import SpecBar from '@/components/ui/SpecBar';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AdBanner from '@/components/ads/AdBanner';

function CarSelector({ label, selected, onSelect, excludeId }: {
  label: string;
  selected: Car | null;
  onSelect: (car: Car) => void;
  excludeId?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const available = cars.filter((c) => c.id !== excludeId);

  return (
    <div className="flex-1">
      <label className="text-sm text-gray-500 mb-2 block">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass rounded-xl p-4 text-left hover:bg-white/[0.04] transition-colors"
      >
        {selected ? (
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={selected.image} alt={selected.nameKo} fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{selected.nameKo}</div>
              <div className="text-xs text-gray-500">{selected.brandKo} · {selected.specs.hp}hp</div>
            </div>
          </div>
        ) : (
          <span className="text-gray-500">차량을 선택하세요</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 glass rounded-xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {available.map((car) => (
              <button
                key={car.id}
                onClick={() => { onSelect(car); setIsOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={car.image} alt={car.nameKo} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="text-sm text-white">{car.nameKo}</div>
                  <div className="text-xs text-gray-500">{car.brandKo} · {car.specs.hp}hp</div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CompareSpec {
  label: string;
  key: keyof Car['specs'];
  unit: string;
  max: number;
  higherIsBetter: boolean;
}

const compareSpecs: CompareSpec[] = [
  { label: '마력', key: 'hp', unit: 'hp', max: 2000, higherIsBetter: true },
  { label: '토크', key: 'torque', unit: 'Nm', max: 2500, higherIsBetter: true },
  { label: '0-100 km/h', key: 'zeroToHundred', unit: 's', max: 8, higherIsBetter: false },
  { label: '최고속도', key: 'topSpeed', unit: 'km/h', max: 550, higherIsBetter: true },
  { label: '무게', key: 'weight', unit: 'kg', max: 3000, higherIsBetter: false },
];

export default function BattlePage() {
  const [carA, setCarA] = useState<Car | null>(null);
  const [carB, setCarB] = useState<Car | null>(null);

  const getWinner = () => {
    if (!carA || !carB) return null;
    let scoreA = 0, scoreB = 0;
    compareSpecs.forEach(({ key, higherIsBetter }) => {
      const a = carA.specs[key] as number;
      const b = carB.specs[key] as number;
      if (higherIsBetter ? a > b : a < b) scoreA++;
      else if (higherIsBetter ? b > a : b < a) scoreB++;
    });
    if (scoreA > scoreB) return carA;
    if (scoreB > scoreA) return carB;
    return null;
  };

  const winner = getWinner();

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            스펙 <span className="text-gradient">배틀</span>
          </h1>
          <p className="text-gray-500 text-center mb-10">
            두 대의 차량을 골라 스펙을 비교해보세요
          </p>
        </ScrollReveal>

        {/* Selectors */}
        <div className="flex gap-4 mb-10">
          <CarSelector label="차량 1" selected={carA} onSelect={setCarA} excludeId={carB?.id} />
          <div className="flex items-center pt-6">
            <span className="text-2xl font-bold text-gradient">VS</span>
          </div>
          <CarSelector label="차량 2" selected={carB} onSelect={setCarB} excludeId={carA?.id} />
        </div>

        <AdBanner format="horizontal" className="mb-8" />

        {/* Comparison */}
        <AnimatePresence>
          {carA && carB && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {compareSpecs.map((spec, i) => {
                const a = carA.specs[spec.key] as number;
                const b = carB.specs[spec.key] as number;
                const aWins = spec.higherIsBetter ? a > b : a < b;
                const bWins = spec.higherIsBetter ? b > a : b < a;

                return (
                  <div key={spec.key} className="glass rounded-xl p-4">
                    <div className="text-center text-sm text-gray-400 mb-3">{spec.label}</div>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                      <div className="text-right">
                        <span className={`text-lg font-bold ${aWins ? 'text-green-400' : bWins ? 'text-red-400' : 'text-white'}`}>
                          {typeof a === 'number' ? a.toLocaleString() : a}{spec.unit}
                        </span>
                        <SpecBar label="" value={a} maxValue={spec.max} delay={i * 0.05} />
                      </div>
                      <div className="text-gray-600 text-xs">vs</div>
                      <div>
                        <span className={`text-lg font-bold ${bWins ? 'text-green-400' : aWins ? 'text-red-400' : 'text-white'}`}>
                          {typeof b === 'number' ? b.toLocaleString() : b}{spec.unit}
                        </span>
                        <SpecBar label="" value={b} maxValue={spec.max} delay={i * 0.05} color="from-blue-500 to-cyan-500" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Winner */}
              {winner && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-8 text-center animate-pulse-glow"
                >
                  <span className="text-4xl mb-2 block">🏆</span>
                  <h3 className="text-xl font-bold text-gradient">{winner.nameKo}</h3>
                  <p className="text-sm text-gray-400 mt-1">스펙 대결 승리!</p>
                </motion.div>
              )}
              {carA && carB && !winner && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <span className="text-4xl mb-2 block">🤝</span>
                  <h3 className="text-xl font-bold text-white">무승부!</h3>
                  <p className="text-sm text-gray-400 mt-1">두 차량이 막상막하입니다</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AdBanner format="horizontal" className="mt-12" />
      </div>
    </section>
  );
}
