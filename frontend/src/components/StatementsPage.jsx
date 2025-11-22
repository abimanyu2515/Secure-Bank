import React, { useState } from "react";
import {
  ArrowLeft,
  Download,
  Filter,
  Lock,
  Printer,
  Search,
  Table,
} from "lucide-react";
import Sidebar from "./common/Sidebar";

const transactions = [
  { id: "TXN1289", date: "20 Nov 2025", description: "Salary Credit", type: "Credit", amount: "+₹50,000" },
  { id: "TXN1290", date: "18 Nov 2025", description: "Amazon Purchase", type: "Debit", amount: "-₹4,250" },
  { id: "TXN1291", date: "16 Nov 2025", description: "Electricity Bill", type: "Debit", amount: "-₹1,320" },
  { id: "TXN1292", date: "14 Nov 2025", description: "Stock Dividend", type: "Credit", amount: "+₹3,400" },
  { id: "TXN1293", date: "10 Nov 2025", description: "Fuel Station", type: "Debit", amount: "-₹2,150" },
];

export default function StatementsPage({ onNavigate, onLogout }) {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    type: "all",
    search: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <Sidebar active="statements" onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-1 overflow-y-auto lg:ml-0">
        <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8 space-y-6 sm:space-y-8">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-teal-100 shadow-lg">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate("home")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-50 hover:bg-teal-100 flex items-center justify-center text-teal-600 transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-teal-600 flex items-center gap-2">
                  Statement Center <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Statements</h1>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <button className="px-3 sm:px-4 py-2 rounded-xl bg-white border-2 border-teal-200 text-teal-600 text-xs sm:text-sm font-semibold flex items-center gap-2 flex-1 sm:flex-initial">
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow flex-1 sm:flex-initial">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>
          </header>

          <section className="bg-white rounded-xl sm:rounded-2xl border-2 border-teal-100 p-4 sm:p-6 shadow-lg space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm sm:text-base">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">From</label>
                <input
                  type="date"
                  name="from"
                  value={filters.from}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">To</label>
                <input
                  type="date"
                  name="to"
                  value={filters.to}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Transaction Type</label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
                >
                  <option value="all">All</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600">Search</label>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    name="search"
                    value={filters.search}
                    onChange={handleFilterChange}
                    placeholder="Narration, amount..."
                    className="w-full px-4 py-3 pl-10 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            </div>
            <button className="self-start px-4 py-2 rounded-xl bg-teal-50 text-teal-700 font-semibold">
              Apply Filters
            </button>
          </section>

          <section className="bg-white rounded-xl sm:rounded-2xl border-2 border-teal-100 p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm sm:text-base">
                <Table className="w-4 h-4" />
                Statement Summary
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Showing {transactions.length} records
              </p>
            </div>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead>
                    <tr className="text-left text-xs sm:text-sm text-gray-500">
                      <th className="py-2 sm:py-3">Txn ID</th>
                      <th className="py-2 sm:py-3">Date</th>
                      <th className="py-2 sm:py-3">Description</th>
                      <th className="py-2 sm:py-3">Type</th>
                      <th className="py-2 sm:py-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-teal-50/50">
                        <td className="py-2 sm:py-3 font-semibold text-gray-800">{txn.id}</td>
                        <td className="py-2 sm:py-3 text-gray-600">{txn.date}</td>
                        <td className="py-2 sm:py-3 text-gray-700">{txn.description}</td>
                        <td className="py-2 sm:py-3 font-semibold text-gray-600">{txn.type}</td>
                        <td
                          className={`py-2 sm:py-3 text-right font-bold ${
                            txn.amount.includes("+") ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {txn.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

