import { MaintenanceInput, MaintenanceResult } from '../types';

export function calculateMaintenance(
  input: MaintenanceInput
): MaintenanceResult {
  const items = [
    { label: '보험료', monthly: input.monthlyInsurance },
    { label: '주유비', monthly: input.monthlyFuel },
    { label: '주차비', monthly: input.monthlyParking },
    { label: '정비비', monthly: input.monthlyMaintenance },
    { label: '검사비', monthly: Math.round(input.annualInspection / 12) },
    { label: '자동차세', monthly: Math.round(input.annualTax / 12) },
  ];

  const monthlyTotal = items.reduce((sum, item) => sum + item.monthly, 0);
  const yearlyTotal = monthlyTotal * 12;

  return {
    monthlyTotal,
    yearlyTotal,
    breakdown: items.map((item) => ({
      label: item.label,
      monthly: item.monthly,
      yearly: item.monthly * 12,
      percentage:
        monthlyTotal > 0
          ? Math.round((item.monthly / monthlyTotal) * 1000) / 10
          : 0,
    })),
  };
}
