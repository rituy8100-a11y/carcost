import { FuelCostInput, FuelCostResult } from '../types';

export function calculateFuelCost(
  input: FuelCostInput
): FuelCostResult | null {
  if (input.distance <= 0 || input.fuelEfficiency <= 0 || input.fuelPrice <= 0)
    return null;
  const fuelNeeded = input.distance / input.fuelEfficiency;
  return {
    fuelNeeded: Math.round(fuelNeeded * 100) / 100,
    totalCost: Math.round(fuelNeeded * input.fuelPrice),
  };
}
