'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { builderSteps } from '@/lib/data/builder-options';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AdBanner from '@/components/ads/AdBanner';

type Selections = Record<string, string>;

function CarPreview({ selections }: { selections: Selections }) {
  const bodyColor = selections.color || '#DC2626';
  const wheelStyle = selections.wheel || 'sport';
  const interiorColor = selections.interior || '#1A1A1D';

  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
      {/* Shadow */}
      <ellipse cx="200" cy="180" rx="160" ry="12" fill="rgba(0,0,0,0.3)" />

      {/* Body */}
      <path
        d="M60 140 L80 100 L140 70 L260 70 L320 100 L340 140 Z"
        fill={bodyColor}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      {/* Roof */}
      <path
        d="M140 70 L160 45 L260 45 L280 70"
        fill={bodyColor}
        opacity="0.9"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      {/* Windows */}
      <path
        d="M145 68 L163 48 L220 48 L220 68"
        fill={interiorColor}
        opacity="0.7"
      />
      <path
        d="M225 68 L225 48 L257 48 L275 68"
        fill={interiorColor}
        opacity="0.7"
      />

      {/* Headlight */}
      <rect x="330" y="110" width="12" height="20" rx="3" fill="#FFF" opacity="0.9" />
      {/* Taillight */}
      <rect x="58" y="110" width="10" height="20" rx="3" fill="#EF4444" opacity="0.8" />

      {/* Wheels */}
      {[120, 280].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="150" r="24" fill="#1A1A1D" stroke="#333" strokeWidth="3" />
          <circle cx={cx} cy="150" r="16" fill="#2A2A2E" stroke="#444" strokeWidth="1" />
          {wheelStyle === 'sport' && (
            <>
              {[0, 72, 144, 216, 288].map((angle) => (
                <line
                  key={angle}
                  x1={cx}
                  y1={150}
                  x2={cx + 14 * Math.cos((angle * Math.PI) / 180)}
                  y2={150 + 14 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#666"
                  strokeWidth="2"
                />
              ))}
            </>
          )}
          {wheelStyle === 'multi' && (
            <>
              {Array.from({ length: 10 }).map((_, j) => (
                <line
                  key={j}
                  x1={cx}
                  y1={150}
                  x2={cx + 14 * Math.cos((j * 36 * Math.PI) / 180)}
                  y2={150 + 14 * Math.sin((j * 36 * Math.PI) / 180)}
                  stroke="#666"
                  strokeWidth="1.5"
                />
              ))}
            </>
          )}
          {wheelStyle === 'aero' && (
            <circle cx={cx} cy={150} r="12" fill="#3A3A3E" />
          )}
          {wheelStyle === 'classic' && (
            <>
              {Array.from({ length: 8 }).map((_, j) => (
                <line
                  key={j}
                  x1={cx + 8 * Math.cos((j * 45 * Math.PI) / 180)}
                  y1={150 + 8 * Math.sin((j * 45 * Math.PI) / 180)}
                  x2={cx + 14 * Math.cos(((j * 45 + 22) * Math.PI) / 180)}
                  y2={150 + 14 * Math.sin(((j * 45 + 22) * Math.PI) / 180)}
                  stroke="#666"
                  strokeWidth="1.5"
                />
              ))}
            </>
          )}
          <circle cx={cx} cy={150} r="4" fill="#555" />
        </g>
      ))}
    </svg>
  );
}

export default function BuilderPage() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentStep = builderSteps[step];

  const handleSelect = (choiceId: string, value: string) => {
    const newSelections = { ...selections, [currentStep.step]: value };
    setSelections(newSelections);

    if (step < builderSteps.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setIsComplete(true);
    }
  };

  const restart = () => {
    setStep(0);
    setSelections({});
    setIsComplete(false);
  };

  const progress = ((step + (isComplete ? 1 : 0)) / builderSteps.length) * 100;

  const getLabel = (stepKey: string, value: string) => {
    const s = builderSteps.find((b) => b.step === stepKey);
    return s?.choices.find((c) => c.value === value)?.label || value;
  };

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            드림카 <span className="text-gradient">빌더</span>
          </h1>
          <p className="text-gray-500 text-center mb-10">
            나만의 드림카를 만들어보세요
          </p>
        </ScrollReveal>

        {/* Preview */}
        <div className="glass rounded-2xl p-6 mb-8">
          <motion.div
            key={JSON.stringify(selections)}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CarPreview selections={selections} />
          </motion.div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Step {Math.min(step + 1, builderSteps.length)} / {builderSteps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-lg font-bold text-white mb-4">
                {currentStep.stepKo}을 선택하세요
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {currentStep.choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleSelect(choice.id, choice.value)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-sm text-left"
                  >
                    {currentStep.step === 'color' && (
                      <span
                        className="w-6 h-6 rounded-full border border-white/20 flex-shrink-0"
                        style={{ backgroundColor: choice.value }}
                      />
                    )}
                    {choice.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-4 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  ← 이전 단계
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <span className="text-5xl mb-4 block">🎨</span>
              <h2 className="text-2xl font-bold text-gradient mb-4">드림카 완성!</h2>

              <div className="space-y-2 mb-6">
                {Object.entries(selections).map(([key, val]) => {
                  const stepData = builderSteps.find((s) => s.step === key);
                  return (
                    <div key={key} className="flex justify-between text-sm px-4">
                      <span className="text-gray-500">{stepData?.stepKo}</span>
                      <span className="text-white">{getLabel(key, val)}</span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={restart}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                다시 만들기
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AdBanner format="horizontal" className="mt-12" />
      </div>
    </section>
  );
}
