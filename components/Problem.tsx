
import React from 'react';
import { PROBLEM_POINTS } from '../constants';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            The Challenge in Today's Carbon Markets
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Despite rapid growth, carbon markets are held back by fundamental flaws that limit their impact and accessibility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEM_POINTS.map((point) => (
            <div key={point.name} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{point.name}</h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;