import React from 'react';
import type { AllocationItem, FundraisingRound, TechLayer, UtilityItem, ProblemPoint, RoadmapItem, TeamMember } from './types';

export const Logo: React.FC = () => (
  <img src="/logo.png" alt="Carbon Blockchain Certificate Logo" className="h-12" />
);

export const ALLOCATION_DATA: AllocationItem[] = [
  { name: 'Carbon Credit Backing', value: 50, color: '#10b981' },
  { name: 'Strategic Partners & Institutions', value: 20, color: '#3b82f6' },
  { name: 'Ecosystem Incentives', value: 15, color: '#8b5cf6' },
  { name: 'Team & Advisors', value: 10, color: '#f97316' },
  { name: 'Treasury Reserve', value: 5, color: '#f59e0b' },
];

export const FUNDRAISING_ROUNDS: FundraisingRound[] = [
  { name: 'Seed Round', amount: '500M CBCs', price: 'USD 0.02', cap: 'USD 10M', vesting: '12-month vesting, 3-month cliff' },
  { name: 'Private Sale', amount: '1.5B CBCs', price: 'USD 0.05', cap: 'USD 75M', vesting: '9-month vesting, 2-month cliff' },
  { name: 'Public Sale', amount: '1B CBCs', price: 'USD 0.10', cap: 'USD 100M', vesting: 'Fully liquid post-listing' },
];

export const TECH_STACK: TechLayer[] = [
  {
    name: 'Solana Blockchain',
    description: "High-performance Proof-of-Stake + Proof-of-History consensus, enabling over 65,000 TPS with sub-second finality.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    name: 'Custom Smart Contracts',
    description: 'Solana Programs managing the CBC lifecycle: Active, Vaulted, and Burned, ensuring transparent and immutable state transitions.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    name: 'On-Chain Metadata',
    description: 'Each CBC carries detailed metadata (registry, project ID, type, vintage), ensuring full traceability and auditability.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7M16 3h-8C7.9 3 7 3.9 7 5v2h10V5c0-1.1-.9-2-2-2z" /></svg>,
  },
  {
    name: 'Oracle & Verification',
    description: 'Independent oracles connect off-chain carbon registries to Solana, guaranteeing every minted CBC is backed by a verified credit.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  },
];

export const UTILITY_ITEMS: UtilityItem[] = [
    { name: 'Trading', description: 'Trade CBCs as standardized digital carbon assets on regulated and decentralized exchanges.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> },
    { name: 'Offsetting', description: 'Retire CBCs permanently via the Vault → Burn process to claim your carbon offset.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>},
    { name: 'Staking & Liquidity', description: 'Provide liquidity to decentralized pools and earn rewards for participating in the ecosystem.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { name: 'Governance', description: 'Participate in the future of the protocol through DAO proposals and voting.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
];

export const PROBLEM_POINTS: ProblemPoint[] = [
    { name: 'Illiquidity & Inefficiency', description: 'Credits are traded over-the-counter with long settlement times, creating high costs and poor price discovery.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: 'Opacity & Fragmentation', description: 'Lack of transparency leads to double counting and credibility gaps, undermining investor confidence.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
    { name: 'Exclusion of Participants', description: 'High entry costs and complexity lock out SMEs and individuals, stalling the democratization of carbon finance.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg> },
];

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    period: 'Q4 2025',
    status: 'Planned',
    description: 'Launch with 500,000 credits, beta platform release.',
  },
  {
    period: 'Q1 2026',
    status: 'Planned',
    description: 'CBC Generation Event, +1.5M credits, pilot trading.',
  },
  {
    period: '2026',
    status: 'Planned',
    description: 'Scale to 14.5M credits, expand into blue carbon and agroforestry.',
  },
  {
    period: '2027',
    status: 'Planned',
    description: 'Onboard Latin America and DAC credits, reaching 26.5M.',
  },
  {
    period: '2028',
    status: 'Planned',
    description: 'Integrate into compliance markets, scale to 30M credits.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Joshua Chang',
    title: 'Co-Founder and CEO',
    image: '/placeholder-joshua.png',
    education: ['University of Pennsylvania, Applied Mathematics and Computational Science, M.A.'],
    workHistory: [
      'Morgan Stanley: Software Developers',
      'IBM Watson Research Center: Research Assistant',
      'IBM Global Business Services New York: Software Consultant, Strategy Consultant'
    ],
    skills: [
      'Carbon Emission Calculation',
      'ESG Calculation',
      'Data Analysis',
      'AI Model MCP and Agent',
      'Software develop life cycle planning',
      'Blockchain DAPP planning and development'
    ]
  },
  {
    name: 'Rudi Bunawan Sutedja',
    title: 'Director of Sustainable Business Development',
    image: '/placeholder-rudi.png',
    education: ['Art Institute of Fort Lauderdale, Florida, USA. Associate degree in Interior Design.'],
    workHistory: [
      'Apple Computer Indonesia (PT. InTouch), multimedia specialist',
      'PT. Reka Chitra Swhara, Owner, media localization projects.',
      'Cerita Alam Nusantara, NGO, founder. Storytelling of conservation acts in Indonesia.',
      'Ofora Trust Foundation, NGO, founder. Conservation of endangered species in Indonesia.',
      'Aladdin Group Malaysia, IT group, business development.',
      'Saakuru Labs, IT & blockchain company, marketing consultant.'
    ],
    skills: [
      'Multimedia productions with IT technology.',
      'Storytelling of complex fundraising projects.',
      'Passion in nature conservations.'
    ]
  }
];