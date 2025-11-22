import React, { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Headphones,
  HelpCircle,
  Lock,
  Mail,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import Sidebar from "./common/Sidebar";

const faqItems = [
  {
    question: "How do I reset my transaction PIN?",
    answer: "Navigate to Account Settings → Security → Reset PIN. You'll receive an OTP to confirm.",
  },
  {
    question: "What is the daily UPI limit?",
    answer: "For most accounts the limit is ₹1,00,000/day. You can request an upgrade via chat.",
  },
  {
    question: "How can I block a lost card?",
    answer: "Visit Manage Cards → Block Card or call 1800 103 1906 for emergency support.",
  },
];

export default function HelpPage({ onNavigate, onLogout }) {
  const [complaint, setComplaint] = useState({
    category: "payments",
    description: "",
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <Sidebar active="help" onNavigate={onNavigate} onLogout={onLogout} />
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
                  Help & Support Desk <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                </p>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">We're here to help</h1>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <button className="px-3 sm:px-4 py-2 rounded-xl bg-white border-2 border-teal-200 text-teal-600 text-xs sm:text-sm font-semibold flex items-center gap-2 flex-1 sm:flex-initial">
                <PhoneCall className="w-4 h-4" />
                <span className="hidden sm:inline">Call 1800 103 1906</span>
                <span className="sm:hidden">Call</span>
              </button>
              <button className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow flex-1 sm:flex-initial">
                <Headphones className="w-4 h-4" />
                Live Chat
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            <section className="bg-white rounded-2xl border-2 border-teal-100 p-6 shadow space-y-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                <h2 className="text-xl font-bold text-gray-800">FAQs</h2>
              </div>
              {faqItems.map((faq) => (
                <div key={faq.question} className="border border-teal-100 rounded-xl p-4 bg-teal-50/30">
                  <p className="font-semibold text-gray-800">{faq.question}</p>
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </section>

            <section className="bg-white rounded-2xl border-2 border-orange-100 p-6 shadow space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-800">Raise a Complaint</h2>
              </div>
              <label className="text-sm font-semibold text-gray-600">Select Category</label>
              <select
                value={complaint.category}
                onChange={(e) =>
                  setComplaint((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
              >
                <option value="payments">Payments & Transfers</option>
                <option value="cards">Cards</option>
                <option value="accounts">Accounts</option>
                <option value="digital">Digital Banking</option>
              </select>
              <label className="text-sm font-semibold text-gray-600">Describe Issue</label>
              <textarea
                value={complaint.description}
                onChange={(e) =>
                  setComplaint((prev) => ({ ...prev, description: e.target.value }))
                }
                rows={5}
                placeholder="Share the issue, transaction ID, or any helpful detail..."
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500"
              />
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 rounded-2xl shadow">
                Submit Complaint
              </button>
            </section>

            <section className="xl:col-span-2 bg-white rounded-xl sm:rounded-2xl border-2 border-teal-100 p-4 sm:p-6 shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="border border-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-teal-50/50">
                <p className="text-xs sm:text-sm font-semibold text-gray-500">Email us</p>
                <p className="text-base sm:text-lg font-bold text-gray-800 flex items-center gap-2 mt-2 break-all">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-xs sm:text-base">support@bankofindia.co.in</span>
                </p>
              </div>
              <div className="border border-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-teal-50/50">
                <p className="text-xs sm:text-sm font-semibold text-gray-500">Chatbot</p>
                <p className="text-base sm:text-lg font-bold text-gray-800 flex items-center gap-2 mt-2">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                  BOI Genie 24x7
                </p>
              </div>
              <div className="border border-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-teal-50/50 sm:col-span-2 lg:col-span-1">
                <p className="text-xs sm:text-sm font-semibold text-gray-500">Branch Visit</p>
                <p className="text-base sm:text-lg font-bold text-gray-800">Schedule appointment online</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

