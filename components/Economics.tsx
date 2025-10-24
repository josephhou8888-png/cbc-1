
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ALLOCATION_DATA, FUNDRAISING_ROUNDS, UTILITY_ITEMS } from '../constants';

const Economics: React.FC = () => {
  return (
    <section id="economics" className="py-20 sm:py-28 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            CBC Economics & Tokenomics
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A sustainable economic model designed for long-term growth, alignment with market dynamics, and broad utility.
          </p>
        </div>

        {/* Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Initial Distribution</h3>
            <p className="text-gray-600 mb-8">
              A balanced allocation to ensure ecosystem health, reward early backers, and support long-term development.
            </p>
            <div className="space-y-4">
              {ALLOCATION_DATA.map((item) => (
                <div key={item.name} className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-700">{item.name}</span>
                  <span className="ml-auto font-semibold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={ALLOCATION_DATA}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="100%"
                  fill="#8884d8"
                >
                  {ALLOCATION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#ffffff',
                    borderColor: '#e5e7eb',
                    borderRadius: '0.5rem',
                  }}
                  itemStyle={{ color: '#4b5563' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fundraising Rounds */}
        <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Fundraising Rounds</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-semibold text-gray-900 p-4">Round</th>
                            <th className="text-left font-semibold text-gray-900 p-4">Amount</th>
                            <th className="text-left font-semibold text-gray-900 p-4">Price</th>
                            <th className="text-left font-semibold text-gray-900 p-4">Cap</th>
                            <th className="text-left font-semibold text-gray-900 p-4">Vesting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FUNDRAISING_ROUNDS.map((round) => (
                            <tr key={round.name} className="border-b border-gray-200 last:border-b-0">
                                <td className="p-4 text-emerald-500 font-semibold">{round.name}</td>
                                <td className="p-4 text-gray-700">{round.amount}</td>
                                <td className="p-4 text-gray-700">{round.price}</td>
                                <td className="p-4 text-gray-700">{round.cap}</td>
                                <td className="p-4 text-gray-700">{round.vesting}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* CBC Utility */}
        <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">CBC Utility</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {UTILITY_ITEMS.map(item => (
                    <div key={item.name} className="bg-white p-6 rounded-xl text-center border border-gray-200">
                        <div className="flex items-center justify-center mx-auto w-16 h-16 bg-emerald-500/10 rounded-lg mb-4">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Economics;