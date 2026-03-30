'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/calculator/CalculatorLayout';
import InputField from '@/components/calculator/InputField';
import SelectField from '@/components/calculator/SelectField';
import ResultCard from '@/components/calculator/ResultCard';
import { calculateCarTax } from '@/lib/calculations/car-tax';
import { POPULAR_CARS } from '@/lib/constants';

export default function CarTaxPage() {
  const [displacement, setDisplacement] = useState('');
  const [vehicleAge, setVehicleAge] = useState('');
  const [isElectric, setIsElectric] = useState('no');
  const [isCommercial, setIsCommercial] = useState('no');

  const result = calculateCarTax({
    displacement: parseFloat(displacement) || 0,
    vehicleAge: parseInt(vehicleAge) || 0,
    isElectric: isElectric === 'yes',
    isCommercial: isCommercial === 'yes',
  });

  return (
    <CalculatorLayout
      title="자동차세 계산기 2026"
      description="배기량과 차령을 입력하면 자동차세와 지방교육세를 자동 계산합니다."
      results={
        result && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResultCard
                label="연간 자동차세 합계"
                value={result.totalAnnualTax.toLocaleString()}
                unit="원"
                highlight
              />
              <ResultCard
                label="반기별 납부액"
                value={result.halfYearTax.toLocaleString()}
                unit="원"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">기본 자동차세</span>
                <span className="text-gray-900">
                  {result.baseTax.toLocaleString()}원
                </span>
              </div>
              {result.ageReduction > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    차령경감 ({Math.round(result.ageReductionRate * 100)}%)
                  </span>
                  <span className="text-red-500">
                    -{result.ageReduction.toLocaleString()}원
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-500">경감 후 자동차세</span>
                <span className="text-gray-900">
                  {result.reducedTax.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">지방교육세 (30%)</span>
                <span className="text-gray-900">
                  {result.educationTax.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                <span className="text-gray-700">연간 합계</span>
                <span className="text-blue-600">
                  {result.totalAnnualTax.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
        )
      }
      info={
        <div>
          <h3 className="font-bold text-gray-900 mb-3">자동차세 안내</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            자동차세는 매년 6월과 12월에 반기별로 납부합니다. 1월에 연납 신청을
            하면 약 10% 할인을 받을 수 있습니다.
          </p>
          <h3 className="font-bold text-gray-900 mb-3">차령경감 제도</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            비영업용 승용차는 최초 등록 후 3년부터 매년 5%씩 세금이 경감되며,
            최대 50% (12년 이상)까지 할인됩니다.
          </p>
        </div>
      }
    >
      <SelectField
        label="차량 용도"
        value={isCommercial}
        onChange={setIsCommercial}
        options={[
          { label: '비영업용 (자가용)', value: 'no' },
          { label: '영업용', value: 'yes' },
        ]}
      />
      <SelectField
        label="연료 타입"
        value={isElectric}
        onChange={setIsElectric}
        options={[
          { label: '내연기관 (휘발유/경유/LPG)', value: 'no' },
          { label: '전기차', value: 'yes' },
        ]}
      />
      {isElectric === 'no' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              인기 차종 바로 선택
            </label>
            <div className="flex flex-wrap gap-2">
              {POPULAR_CARS.map((car) => (
                <button
                  key={car.label}
                  onClick={() => setDisplacement(String(car.displacement))}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                    displacement === String(car.displacement)
                      ? 'bg-blue-50 border-blue-300 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-blue-200'
                  }`}
                >
                  {car.label}
                </button>
              ))}
            </div>
          </div>
          <InputField
            label="배기량"
            value={displacement}
            onChange={setDisplacement}
            unit="cc"
            placeholder="예: 1999"
          />
        </>
      )}
      <InputField
        label="차량 연식 (경과 연수)"
        value={vehicleAge}
        onChange={setVehicleAge}
        unit="년"
        placeholder="예: 5 (신차는 0)"
      />
    </CalculatorLayout>
  );
}
