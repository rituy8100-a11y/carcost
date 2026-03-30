import Link from 'next/link';
import { CalculatorInfo } from '@/lib/types';

export default function CalculatorCard({ calc }: { calc: CalculatorInfo }) {
  return (
    <Link
      href={calc.href}
      className="group block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all"
    >
      <div
        className={`w-12 h-12 ${calc.color} rounded-lg flex items-center justify-center text-2xl mb-4`}
      >
        {calc.icon}
      </div>
      <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {calc.title}
      </h2>
      <p className="text-sm text-gray-500 leading-relaxed">
        {calc.description}
      </p>
    </Link>
  );
}
