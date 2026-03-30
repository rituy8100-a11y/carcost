'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import InputField from '@/components/calculator/InputField';
import ResultCard from '@/components/calculator/ResultCard';
import { calculateMaintenance } from '@/lib/calculations/maintenance';

export default function MaintenancePage() {
  const [insurance, setInsurance] = useState('');
  const [fuel, setFuel] = useState('');
  const [parking, setParking] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const [inspection, setInspection] = useState('');
  const [tax, setTax] = useState('');

  const result = calculateMaintenance({
    monthlyInsurance: parseFloat(insurance) || 0,
    monthlyFuel: parseFloat(fuel) || 0,
    monthlyParking: parseFloat(parking) || 0,
    monthlyMaintenance: parseFloat(maintenance) || 0,
    annualInspection: parseFloat(inspection) || 0,
    annualTax: parseFloat(tax) || 0,
  });

  const hasInput = result.monthlyTotal > 0;

  return (
    <CalculatorLayout
      title="자동차 유지비 계산기"
      description="보험, 주유, 주차, 정비 등 모든 비용을 입력하면 월/연간 유지비를 계산합니다."
      results={
        hasInput && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResultCard
                label="월 유지비"
                value={result.monthlyTotal.toLocaleString()}
                unit="원"
                highlight
              />
              <ResultCard
                label="연간 유지비"
                value={result.yearlyTotal.toLocaleString()}
                unit="원"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">항목별 비율</h3>
              {result.breakdown
                .filter((item) => item.monthly > 0)
                .map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 w-16">
                      {item.label}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-blue-500 h-full rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-700 w-20 text-right">
                      {item.monthly.toLocaleString()}원
                    </span>
                    <span className="text-xs text-gray-400 w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )
      }
      info={
        <div>
          <h3 className="font-bold text-gray-900 mb-3">유지비 절약 팁</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>자동차 보험은 매년 비교 견적을 받아보세요</li>
            <li>자동차세 1월 연납 시 약 10% 할인</li>
            <li>정기 점검으로 큰 수리비를 예방하세요</li>
            <li>주거지 근처 월정액 주차장을 알아보세요</li>
            <li>셀프 세차, 셀프 주유로 소소하게 절약하세요</li>
          </ul>
        </div>
      }
    >
      <InputField
        label="월 보험료"
        value={insurance}
        onChange={setInsurance}
        unit="원"
        placeholder="예: 80000"
      />
      <InputField
        label="월 주유비"
        value={fuel}
        onChange={setFuel}
        unit="원"
        placeholder="예: 200000"
      />
      <InputField
        label="월 주차비"
        value={parking}
        onChange={setParking}
        unit="원"
        placeholder="예: 100000"
      />
      <InputField
        label="월 정비/소모품비"
        value={maintenance}
        onChange={setMaintenance}
        unit="원"
        placeholder="예: 50000"
      />
      <InputField
        label="연간 검사비"
        value={inspection}
        onChange={setInspection}
        unit="원"
        placeholder="예: 50000"
      />
      <InputField
        label="연간 자동차세"
        value={tax}
        onChange={setTax}
        unit="원"
        placeholder="예: 500000 (자동차세 계산기에서 확인)"
      />
    </CalculatorLayout>
  );
}
