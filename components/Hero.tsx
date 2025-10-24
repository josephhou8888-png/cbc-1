import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video and overlays */}
      <div className="absolute inset-0 bg-white opacity-40 z-10"></div>
      <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="https://picsum.photos/id/10/1920/1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/50 to-transparent z-10"></div>

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
              The Future of <span className="text-emerald-500">Climate Finance</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-700 mb-8">
              Bridging Climate Action and Institutional Capital with the Carbon Blockchain Certificate (CBC) — a transparent, liquid, and secure carbon credit ecosystem on Solana.
            </p>
            <a 
              href="#solution" 
              onClick={(e) => handleScrollClick(e, '#solution')}
              className="inline-block bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20 cursor-pointer">
              Discover the Solution
            </a>
          </div>

          {/* Image content */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-2xl transform -rotate-3 blur-2xl opacity-60"></div>
                <div className="relative bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/30">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="font-bold text-2xl text-gray-800">Carbon Certificate</p>
                            <p className="text-sm text-emerald-600 font-semibold">CBC-001-4587-2024</p>
                        </div>
                        <svg className="h-10 w-10 text-emerald-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div className="h-32 bg-gray-200/50 rounded-lg flex items-center justify-center mb-4 border border-gray-300/50">
                        {/* Placeholder for a QR code or chart */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3 10h18M3 14h18M10 3v18M14 3v18" /></svg>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Vintage</p>
                            <p className="font-semibold text-gray-800 text-lg">2024</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Amount</p>
                            <p className="font-semibold text-gray-800 text-lg">1 tCO₂e</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Project</p>
                            <p className="font-semibold text-gray-800 text-lg">Wind</p>
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-3">
                        <p className="text-xs font-mono text-gray-400">Powered by Solana</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
