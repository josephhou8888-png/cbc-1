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

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  education: string[];
  workHistory: string[];
  skills: string[];
}

export interface Transaction {
  id: string;
  type: 'Buy' | 'Sell' | 'Transfer' | 'Offset';
  date: string;
  amountCBC: number;
  amountUSD: number;
  status: 'Completed' | 'Pending';
}

export interface Offset {
  id: string;
  date: string;
  amountCBC: number;
  amountCO2: number; // in tonnes
  project: string;
  certificateId: string;
}