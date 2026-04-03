export interface CarSpecs {
  engine: string;
  hp: number;
  torque: number;
  zeroToHundred: number;
  topSpeed: number;
  price: string;
  weight: number;
  drivetrain: string;
}

export interface Car {
  id: string;
  name: string;
  nameKo: string;
  brand: string;
  brandKo: string;
  year: number;
  description: string;
  specs: CarSpecs;
  image: string;
  category: 'supercar' | 'sports' | 'luxury' | 'classic' | 'ev';
  decade: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  matchedCar: string;
  traits: string[];
}

export interface TimelineEntry {
  decade: string;
  title: string;
  description: string;
  cars: string[];
  highlight: string;
}

export interface BuilderOption {
  step: string;
  stepKo: string;
  choices: {
    id: string;
    label: string;
    value: string;
  }[];
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  description: string;
}
