'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import InputField from '@/components/calculator/InputField';
import SelectField from '@/components/calculator/SelectField';
import ResultCard from '@/components/calculator/ResultCard';
import { calculateFuelCost } from '@/lib/calculations/fuel-cost';
import { FUEL_TYPES } from '@/lib/constants';

export default function FuelCostPage() {
  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [fuelType, setFuelType] = useState('0');
  const [customPrice, setCustomPrice] = useState('');

  const selectedFuel = FUEL_TYPES[parseInt(fuelType)];
  const fuelPrice = customPrice ? parseFloat(customPrice) : selectedFuel?.price || 0;

  const result = calculateFuelCost({
    distance: parseFloat(distance) || 0,
    fuelEfficiency: parseFloat(fuelEfficiency) || 0,
    fuelPrice,
  });

  return (
    <CalculatorLayout
      title="주유비 계산기"
      description="주행거리, 연비, 유가를 입력하면 필요한 주유비를 계산합니다."
      results={
        result && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ResultCard
              label="예상 주유비"
              value={result.totalCost.toLocaleString()}
              unit="원"
              highlight
            />
            <ResultCard
              label="필요 연료량"
              value={result.fuelNeeded.toLocaleString()}
              unit="L"
            />
          </div>
        )
      }
      info={
        <div>
          <h3 className="font-bold text-gray-900 mb-3">주유비 절약 팁</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>셀프 주유소를 이용하면 L당 50~100원 절약 가능</li>
            <li>알뜰 주유소 앱으로 주변 최저가 주유소를 찾으세요</li>
            <li>주유 카드/앱 할인 혜택을 활용하세요</li>
            <li>경제 운전으로 연비를 높이면 자연스럽게 주유비가 줄어듭니다</li>
          </ul>
        </div>
      }
    >
      <InputField
        label="주행거리"
        value={distance}
        onChange={setDistance}
        unit="km"
        placeholder="예: 300"
      />
      <InputField
        label="차량 연비"
        value={fuelEfficiency}
        onChange={setFuelEfficiency}
        unit="km/L"
        placeholder="예: 12.5"
      />
      <SelectField
        label="연료 종류"
        value={fuelType}
        onChange={(v) => {
          setFuelType(v);
          setCustomPrice('');
        }}
        options={FUEL_TYPES.map((ft, i) => ({
          label: `${ft.label} (평균 ${ft.price.toLocaleString()}원/L)`,
          value: String(i),
        }))}
      />
      <InputField
        label="유가 직접 입력 (선택)"
        value={customPrice}
        onChange={setCustomPrice}
        unit="원/L"
        placeholder={`미입력 시 평균가 ${selectedFuel?.price.toLocaleString()}원 적용`}
      />
    </CalculatorLayout>
  );
}
