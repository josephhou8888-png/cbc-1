import React from 'react';
import { useAuth } from '../hooks/useAuth';
import type { Transaction, Offset } from '../types';

// --- Mock Data ---
// In a real application, this data would be fetched from an API.
const mockTransactions: Transaction[] = [
    { id: 'txn1', type: 'Buy', date: '2024-07-20', amountCBC: 5000, amountUSD: 500.00, status: 'Completed' },
    { id: 'txn2', type: 'Offset', date: '2024-07-18', amountCBC: 1000, amountUSD: 100.00, status: 'Completed' },
    { id: 'txn3', type: 'Sell', date: '2024-07-15', amountCBC: 750, amountUSD: 78.50, status: 'Completed' },
    { id: 'txn4', type: 'Transfer', date: '2024-07-12', amountCBC: 200, amountUSD: 0, status: 'Completed' },
    { id: 'txn5', type: 'Buy', date: '2024-07-10', amountCBC: 2500, amountUSD: 245.00, status: 'Completed' },
];

const mockOffsets: Offset[] = [
    { id: 'off1', date: '2024-07-18', amountCBC: 1000, amountCO2: 1.0, project: 'Amazon Reforestation', certificateId: 'CERT-XYZ-001' },
    { id: 'off2', date: '2024-06-12', amountCBC: 2500, amountCO2: 2.5, project: 'Kenya Wind Farm', certificateId: 'CERT-ABC-002' },
    { id: 'off3', date: '2024-04-22', amountCBC: 500, amountCO2: 0.5, project: 'Indonesian Peatland Restoration', certificateId: 'CERT-DEF-003' },
];
// --- End Mock Data ---


// Helper components for icons and styling
const TransactionIcon: React.FC<{ type: Transaction['type'] }> = ({ type }) => {
    const icons = {
        Buy: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
        Sell: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>,
        Transfer: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
        Offset: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
    };
    return <div className="p-2 bg-gray-100 rounded-full">{icons[type]}</div>;
};

const StatusBadge: React.FC<{ status: Transaction['status'] }> = ({ status }) => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    const styles = {
        Completed: `${baseClasses} bg-green-100 text-green-800`,
        Pending: `${baseClasses} bg-yellow-100 text-yellow-800`,
    };
    return <span className={styles[status]}>{status}</span>;
};


const DashboardPage: React.FC = () => {
    const { user } = useAuth();
    
    if (!user) {
        return <div className="min-h-screen flex items-center justify-center"><p>Loading user data...</p></div>
    }

    // --- Simulated Calculations ---
    const currentPricePerCBC = 0.10; // $0.10 USD
    const cbcBalance = mockTransactions.reduce((acc, t) => {
        if (t.type === 'Buy') return acc + t.amountCBC;
        if (t.type === 'Sell' || t.type === 'Transfer' || t.type === 'Offset') return acc - t.amountCBC;
        return acc;
    }, 0);
    const portfolioValue = cbcBalance * currentPricePerCBC;
    const totalOffsetCO2 = mockOffsets.reduce((acc, o) => acc + o.amountCO2, 0);
    // --- End Calculations ---

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900">Welcome back,</h1>
                <p className="mt-2 text-lg text-gray-600">
                    <span className="font-semibold text-emerald-600">{user.email}</span>
                </p>
            </div>

            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-md font-medium text-gray-500">Current CBC Balance</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{cbcBalance.toLocaleString()} CBC</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-md font-medium text-gray-500">Portfolio Value (USD)</h3>
                    <p className="text-3xl font-bold text-emerald-500 mt-2">${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-md font-medium text-gray-500">Total Carbon Offset</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{totalOffsetCO2.toLocaleString()} tCO₂e</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
                    <div className="space-y-4">
                        {mockTransactions.slice(0, 5).map(tx => (
                            <div key={tx.id} className="flex items-center space-x-4 p-3 rounded-md hover:bg-gray-50">
                                <TransactionIcon type={tx.type} />
                                <div className="flex-grow">
                                    <p className="font-semibold text-gray-800">{tx.type}</p>
                                    <p className="text-sm text-gray-500">{tx.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`font-semibold ${tx.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                                        {tx.type === 'Buy' ? '+' : '-'}{tx.amountCBC.toLocaleString()} CBC
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {tx.amountUSD > 0 && `$${tx.amountUSD.toFixed(2)}`}
                                    </p>
                                </div>
                                <div className="w-24 text-right">
                                    <StatusBadge status={tx.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carbon Offset History */}
                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Carbon Offset History</h3>
                    <div className="space-y-5">
                        {mockOffsets.slice(0, 4).map(offset => (
                            <div key={offset.id}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="font-semibold text-gray-800">{offset.project}</p>
                                    <p className="font-bold text-emerald-600">{offset.amountCO2.toLocaleString()} tCO₂e</p>
                                </div>
                                <p className="text-sm text-gray-500">{offset.date}</p>
                                <a href="#" className="text-sm text-emerald-500 hover:underline mt-1 inline-block">View Certificate</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;