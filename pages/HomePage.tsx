import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Market from '../components/Market';
import Technology from '../components/Technology';
import Economics from '../components/Economics';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <Technology />
      <Economics />
      <Roadmap />
      <Team />
    </>
  );
};

export default HomePage;