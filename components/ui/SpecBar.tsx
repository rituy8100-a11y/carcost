'use client';

import { motion } from 'framer-motion';

interface SpecBarProps {
  label: string;
  value: number;
  maxValue: number;
  unit?: string;
  color?: string;
  delay?: number;
}

export default function SpecBar({
  label,
  value,
  maxValue,
  unit = '',
  color = 'from-red-500 to-orange-500',
  delay = 0,
}: SpecBarProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="text-white font-medium">
          {value.toLocaleString()}{unit}
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}
