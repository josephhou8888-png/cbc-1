
import React from 'react';

const Solution: React.FC = () => {
    const lifecycleSteps = [
        { name: 'Active', description: 'CBCs are issued and freely tradable within the whitelist-governed Solana ecosystem.' },
        { name: 'Vaulted', description: 'CBCs are locked in a vault smart contract for 30 days to ensure auditability and error correction.' },
        { name: 'Burned', description: 'CBCs are permanently destroyed, and an immutable proof of retirement is recorded on-chain.' }
    ];

  return (
    <section id="solution" className="py-20 sm:py-28 bg-gray-200/70 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            The CBC Solution: A New Standard for Carbon
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We introduce a single, transparent standard for verified carbon credits, where each CBC represents one kilogram of CO2e reduced or removed.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" style={{ transform: 'translateY(-50%)' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
            {lifecycleSteps.map((step, index) => (
              <div key={step.name} className="text-center flex flex-col items-center">
                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-gray-100 border-2 border-emerald-500 rounded-full text-emerald-500 text-3xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{step.name}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-500">Full Transparency, Verifiable Impact</h3>
            <p className="mt-2 text-gray-700">
            Each CBC carries on-chain metadata including registry source, project ID, project type, methodology, and vintage year. This guarantees transparency and prevents double issuance or double counting.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;