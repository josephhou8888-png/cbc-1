
import React from 'react';
import { TECH_STACK } from '../constants';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-gray-200/70 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Built for a Global Scale on Solana
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our architecture leverages Solana's high-performance blockchain to deliver institutional-grade scalability, low costs, and unparalleled transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK.map((layer) => (
            <div key={layer.name} className="flex items-start space-x-6 p-6 bg-white rounded-xl">
              <div className="flex-shrink-0">
                {layer.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{layer.name}</h3>
                <p className="mt-1 text-gray-600">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;