import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';

const AccordionItem: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-gray-700 font-medium"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pl-4">
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of climate scientists, blockchain engineers, and product visionaries dedicated to making a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0">
                        {/* Placeholder for image */}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-emerald-500 font-semibold">{member.title}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <AccordionItem title="Education" items={member.education} />
                    <AccordionItem title="Work History" items={member.workHistory} />
                    <AccordionItem title="Skills" items={member.skills} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;