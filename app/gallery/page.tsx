'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cars, categories } from '@/lib/data/cars';
import { Car } from '@/lib/types';
import SpecBar from '@/components/ui/SpecBar';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AdBanner from '@/components/ads/AdBanner';

function CarCard({ car, onClick }: { car: Car; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`car-${car.id}`}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.image}
          alt={car.nameKo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-xs text-gray-300">{car.brandKo}</span>
          <h3 className="text-white font-bold">{car.nameKo}</h3>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{car.year}년</span>
          <span>{car.specs.hp}hp</span>
          <span>{car.specs.zeroToHundred}s</span>
        </div>
        <div className="text-sm font-semibold text-gradient">{car.specs.price}</div>
      </div>
    </motion.div>
  );
}

function CarModal({ car, onClose }: { car: Car; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`car-${car.id}`}
        className="bg-brand-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <Image
            src={car.image}
            alt={car.nameKo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 -mt-10 relative">
          <span className="text-sm text-gray-400">{car.brandKo} · {car.year}</span>
          <h2 className="text-2xl font-bold text-white mt-1">{car.name}</h2>
          <h3 className="text-lg text-gradient font-semibold">{car.nameKo}</h3>

          <p className="text-sm text-gray-400 mt-4 leading-relaxed">{car.description}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <span className="px-2 py-0.5 rounded bg-white/5 text-xs">{car.specs.engine}</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-xs">{car.specs.drivetrain}</span>
            </div>
            <SpecBar label="마력" value={car.specs.hp} maxValue={2000} unit="hp" delay={0} />
            <SpecBar label="토크" value={car.specs.torque} maxValue={2500} unit="Nm" delay={0.05} />
            <SpecBar label="0-100 km/h" value={car.specs.zeroToHundred} maxValue={8} unit="s" delay={0.1} color="from-green-500 to-emerald-500" />
            <SpecBar label="최고속도" value={car.specs.topSpeed} maxValue={550} unit="km/h" delay={0.15} />
            <SpecBar label="무게" value={car.specs.weight} maxValue={3000} unit="kg" delay={0.2} color="from-blue-500 to-cyan-500" />
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm text-gray-500">가격</span>
            <span className="text-xl font-bold text-gradient">{car.specs.price}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filtered = selectedCategory === 'all'
    ? cars
    : cars.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            슈퍼카 <span className="text-gradient">갤러리</span>
          </h1>
          <p className="text-gray-500 text-center mb-10">
            역사에 남을 아이코닉 자동차 컬렉션
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AdBanner format="horizontal" className="mb-8" />

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((car, i) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <CarCard car={car} onClick={() => setSelectedCar(car)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AdBanner format="horizontal" className="mt-12" />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
