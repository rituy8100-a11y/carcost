'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import InputField from '@/components/calculator/InputField';
import ResultCard from '@/components/calculator/ResultCard';
import { calculateFuelEfficiency } from '@/lib/calculations/fuel-efficiency';

export default function FuelEfficiencyPage() {
  const [distance, setDistance] = useState('');
  const [fuelUsed, setFuelUsed] = useState('');

  const result = calculateFuelEfficiency({
    distance: parseFloat(distance) || 0,
    fuelUsed: parseFloat(fuelUsed) || 0,
  });

  return (
    <CalculatorLayout
      title="연비 계산기"
      description="주행거리와 주유량을 입력하면 연비(km/L)를 자동으로 계산합니다."
      results={
        result && (
          <div className="grid grid-cols-1 gap-4">
            <ResultCard
              label="연비"
              value={result.efficiency.toLocaleString()}
              unit="km/L"
              highlight
            />
            <div className="text-sm text-gray-500 mt-2">
              {result.efficiency >= 15
                ? '우수한 연비입니다! 경제적인 운전을 하고 계시네요.'
                : result.efficiency >= 10
                ? '평균적인 연비입니다. 경제 운전으로 더 줄일 수 있어요.'
                : '연비가 다소 낮습니다. 급가속/급제동을 줄여보세요.'}
            </div>
          </div>
        )
      }
      info={
        <div>
          <h3 className="font-bold text-gray-900 mb-3">연비란?</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            연비(燃費)는 연료 1리터로 주행할 수 있는 거리를 의미합니다.
            km/L 단위로 표시하며, 숫자가 높을수록 연료 효율이 좋은 것입니다.
          </p>
          <h3 className="font-bold text-gray-900 mb-3">
            연비를 높이는 방법
          </h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>급가속, 급제동을 피하세요</li>
            <li>정속 주행을 유지하세요 (60~80km/h 최적)</li>
            <li>타이어 공기압을 적정하게 유지하세요</li>
            <li>불필요한 짐을 내리세요</li>
            <li>에어컨 사용을 최소화하세요</li>
          </ul>
        </div>
      }
    >
      <InputField
        label="주행거리"
        value={distance}
        onChange={setDistance}
        unit="km"
        placeholder="예: 500"
      />
      <InputField
        label="주유량"
        value={fuelUsed}
        onChange={setFuelUsed}
        unit="L"
        placeholder="예: 40"
      />
    </CalculatorLayout>
  );
}
