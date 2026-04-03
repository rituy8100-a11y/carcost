import { BuilderOption } from '../types';

export const builderSteps: BuilderOption[] = [
  {
    step: 'body',
    stepKo: '바디 타입',
    choices: [
      { id: 'coupe', label: '쿠페', value: 'coupe' },
      { id: 'roadster', label: '로드스터', value: 'roadster' },
      { id: 'suv', label: 'SUV', value: 'suv' },
      { id: 'sedan', label: '세단', value: 'sedan' },
    ],
  },
  {
    step: 'color',
    stepKo: '외장 색상',
    choices: [
      { id: 'red', label: '로쏘 코르사', value: '#DC2626' },
      { id: 'black', label: '미드나잇 블랙', value: '#1A1A1D' },
      { id: 'white', label: '비앙코 퓨리즘', value: '#F5F5F5' },
      { id: 'blue', label: '블루 일레트리코', value: '#2563EB' },
      { id: 'yellow', label: '지알로 모데나', value: '#EAB308' },
      { id: 'green', label: 'BRG', value: '#166534' },
    ],
  },
  {
    step: 'wheel',
    stepKo: '휠 디자인',
    choices: [
      { id: 'sport', label: '스포츠 5스포크', value: 'sport' },
      { id: 'multi', label: '멀티스포크', value: 'multi' },
      { id: 'classic', label: '클래식 메쉬', value: 'classic' },
      { id: 'aero', label: '에어로 디스크', value: 'aero' },
    ],
  },
  {
    step: 'interior',
    stepKo: '인테리어',
    choices: [
      { id: 'black-leather', label: '블랙 레더', value: '#1A1A1D' },
      { id: 'tan-leather', label: '탄 레더', value: '#92400E' },
      { id: 'red-leather', label: '레드 레더', value: '#DC2626' },
      { id: 'alcantara', label: '알칸타라 그레이', value: '#4B5563' },
    ],
  },
  {
    step: 'engine',
    stepKo: '파워트레인',
    choices: [
      { id: 'v8-turbo', label: 'V8 트윈터보', value: 'v8-turbo' },
      { id: 'v12-na', label: 'V12 자연흡기', value: 'v12-na' },
      { id: 'hybrid', label: '하이브리드', value: 'hybrid' },
      { id: 'electric', label: '풀 일렉트릭', value: 'electric' },
    ],
  },
];
