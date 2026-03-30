import { FuelEfficiencyInput, FuelEfficiencyResult } from '../types';

export function calculateFuelEfficiency(
  input: FuelEfficiencyInput
): FuelEfficiencyResult | null {
  if (input.distance <= 0 || input.fuelUsed <= 0) return null;
  return {
    efficiency: Math.round((input.distance / input.fuelUsed) * 100) / 100,
  };
}
