import {
  NON_COMMERCIAL_TAX_RATES,
  COMMERCIAL_TAX_RATES,
  EV_TAX,
  LOCAL_EDUCATION_TAX_RATE,
} from '../constants';
import { CarTaxInput, CarTaxResult } from '../types';

function getAgeReductionRate(vehicleAge: number): number {
  if (vehicleAge < 3) return 0;
  const reductionYears = Math.min(vehicleAge - 2, 10);
  return Math.min(reductionYears * 0.05, 0.5);
}

export function calculateCarTax(input: CarTaxInput): CarTaxResult | null {
  if (!input.isElectric && input.displacement <= 0) return null;
  if (input.vehicleAge < 0) return null;

  let baseTax: number;

  if (input.isElectric) {
    baseTax = input.isCommercial ? EV_TAX.COMMERCIAL : EV_TAX.NON_COMMERCIAL;
  } else {
    const rates = input.isCommercial
      ? COMMERCIAL_TAX_RATES
      : NON_COMMERCIAL_TAX_RATES;
    const bracket = rates.find((r) => input.displacement <= r.maxCC)!;
    baseTax = input.displacement * bracket.ratePerCC;
  }

  const ageReductionRate = input.isCommercial
    ? 0
    : getAgeReductionRate(input.vehicleAge);
  const ageReduction = Math.floor(baseTax * ageReductionRate);
  const reducedTax = baseTax - ageReduction;
  const educationTax = Math.floor(reducedTax * LOCAL_EDUCATION_TAX_RATE);
  const totalAnnualTax = reducedTax + educationTax;
  const halfYearTax = Math.floor(totalAnnualTax / 2);

  return {
    baseTax,
    ageReductionRate,
    ageReduction,
    reducedTax,
    educationTax,
    totalAnnualTax,
    halfYearTax,
  };
}
