'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { quizQuestions, quizResults } from '@/lib/data/quiz-questions';
import { cars } from '@/lib/data/cars';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AdBanner from '@/components/ads/AdBanner';

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<(typeof quizResults)[number] | null>(null);

  const handleAnswer = (optionScores: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScores(newScores);

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const topType = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      const matched = quizResults.find((r) => r.id === topType) || quizResults[0];
      setResult(matched);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setScores({});
    setResult(null);
  };

  const matchedCar = result ? cars.find((c) => c.id === result.matchedCar) : null;
  const progress = started ? ((currentQ + 1) / quizQuestions.length) * 100 : 0;

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            자동차 <span className="text-gradient">퀴즈</span>
          </h1>
          <p className="text-gray-500 text-center mb-10">
            나에게 맞는 차를 찾아보세요
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {/* Start Screen */}
          {!started && !result && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <span className="text-6xl mb-4 block">🧩</span>
              <h2 className="text-2xl font-bold text-white mb-3">나에게 맞는 차는?</h2>
              <p className="text-gray-400 mb-6">
                8개의 질문에 답하고 당신에게 어울리는 드림카를 찾아보세요!
              </p>
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                시작하기
              </button>
            </motion.div>
          )}

          {/* Questions */}
          {started && !result && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{currentQ + 1} / {quizQuestions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                    initial={{ width: `${((currentQ) / quizQuestions.length) * 100}%` }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-6">
                  {quizQuestions[currentQ].question}
                </h2>
                <div className="space-y-3">
                  {quizQuestions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.scores)}
                      className="w-full text-left px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-sm"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Result */}
          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <span className="text-6xl mb-4 block">🎉</span>
              <h2 className="text-2xl font-bold text-gradient mb-2">{result.title}</h2>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{result.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {result.traits.map((trait) => (
                  <span key={trait} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300">
                    {trait}
                  </span>
                ))}
              </div>

              {matchedCar && (
                <div className="glass rounded-xl p-4 mb-6">
                  <p className="text-xs text-gray-500 mb-2">당신에게 어울리는 차</p>
                  <p className="text-lg font-bold text-white">{matchedCar.nameKo}</p>
                  <p className="text-sm text-gray-400">
                    {matchedCar.brandKo} · {matchedCar.specs.hp}hp · {matchedCar.specs.price}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={restart}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all"
                >
                  다시 하기
                </button>
                <Link
                  href="/gallery"
                  className="px-6 py-3 border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/5 transition-all"
                >
                  갤러리 보기
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AdBanner format="horizontal" className="mt-12" />
      </div>
    </section>
  );
}
