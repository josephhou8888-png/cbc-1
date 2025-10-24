
import React from 'react';

const Market: React.FC = () => {
  const stats = [
    { value: '$4.73 Trillion', label: 'Projected Market by 2030' },
    { value: '33.8%', label: 'Compound Annual Growth Rate' },
    { value: '$4.5 Trillion', label: 'Annual Investment Needed' },
  ];

  return (
    <section id="market" className="py-20 sm:py-28 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            An Exponential Market Opportunity
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Global carbon markets are poised for exponential growth, driven by regulation, corporate net-zero commitments, and the financialization of carbon as an asset class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-4xl lg:text-5xl font-bold text-emerald-500">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expanding Institutional Appetite</h3>
                <p className="text-gray-600">
                Leading asset managers, sovereign wealth funds, and major banks are launching carbon-linked financial products, signaling a structural shift towards carbon as a core portfolio asset.
                </p>
            </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reinforcing Policy Drivers</h3>
                <p className="text-gray-600">
                From the EU's expanding Emissions Trading System to China's national carbon market, regulatory mandates are creating powerful tailwinds for carbon credit pricing and demand.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Market;