export interface FuelEfficiencyInput {
  distance: number;
  fuelUsed: number;
}

export interface FuelEfficiencyResult {
  efficiency: number;
}

export interface FuelCostInput {
  distance: number;
  fuelEfficiency: number;
  fuelPrice: number;
}

export interface FuelCostResult {
  fuelNeeded: number;
  totalCost: number;
}

export interface CarTaxInput {
  displacement: number;
  isElectric: boolean;
  isCommercial: boolean;
  vehicleAge: number;
}

export interface CarTaxResult {
  baseTax: number;
  ageReductionRate: number;
  ageReduction: number;
  reducedTax: number;
  educationTax: number;
  totalAnnualTax: number;
  halfYearTax: number;
}

export interface MaintenanceInput {
  monthlyInsurance: number;
  monthlyFuel: number;
  monthlyParking: number;
  monthlyMaintenance: number;
  annualInspection: number;
  annualTax: number;
}

export interface MaintenanceResult {
  monthlyTotal: number;
  yearlyTotal: number;
  breakdown: {
    label: string;
    monthly: number;
    yearly: number;
    percentage: number;
  }[];
}

export interface CalculatorInfo {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
}
