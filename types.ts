import type { ReactNode } from 'react';

export interface AllocationItem {
  name: string;
  value: number;
  color: string;
}

export interface FundraisingRound {
  name: string;
  amount: string;
  price: string;
  cap: string;
  vesting: string;
}

export interface TechLayer {
  name:string;
  description: string;
  icon: ReactNode;
}

export interface UtilityItem {
  name: string;
  description: string;
  icon: ReactNode;
}

export interface ProblemPoint {
    name: string;
    description: string;
    icon: ReactNode;
}

export interface RoadmapItem {
  period: string;
  status: string;
  description: string;
}
