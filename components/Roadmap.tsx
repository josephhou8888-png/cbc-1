
import React from 'react';
import { ROADMAP_DATA } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 sm:py-28 bg-gray-200/70 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Roadmap
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our journey to redefine climate finance is mapped out with clear, ambitious milestones for the coming years.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>

            {ROADMAP_DATA.map((item, index) => (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                {/* The dot on the timeline */}
                <div className="absolute left-5 top-1 w-5 h-5 bg-emerald-500 rounded-full transform -translate-x-1/2 border-4 border-gray-200/70"></div>

                {/* The content card */}
                <div className="relative bg-white p-6 rounded-lg border border-gray-200 hover:border-emerald-500/50 transition-colors duration-300">
                  <p className="text-sm font-semibold text-emerald-500 mb-1">{item.period}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full mb-3">{item.status}</span>
                  <p className="text-gray-700 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;