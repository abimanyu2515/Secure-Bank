import React, { useState } from "react";
import {
  CreditCard,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Send,
  Settings,
  X,
} from "lucide-react";

const navConfig = [
  { key: "home", label: "Home", icon: Home },
  { key: "transfer", label: "Transfer Money", icon: Send },
  { key: "cards", label: "Cards", icon: CreditCard },
  { key: "statements", label: "Statements", icon: FileText },
  { key: "help", label: "Help & Support", icon: HelpCircle },
];

export default function Sidebar({
  active = "home",
  onNavigate = () => {},
  onLogout = () => {},
  profileName = "Heramb Pawar",
  accountNumber = "****7890",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const buttonClasses = (key) =>
    `w-full py-3 px-4 rounded-xl font-semibold transition flex items-center gap-3 ${
      key === active
        ? "bg-teal-500 text-white shadow-lg"
        : "bg-teal-50 hover:bg-teal-100 text-gray-700"
    }`;

  const handleNavigate = (key) => {
    if (key !== active) {
      onNavigate(key);
    }
    setIsMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <>
      <div className="text-center mb-6 md:mb-8">
        <div className="w-20 h-20 md:w-28 md:h-28 bg-teal-100 rounded-full mx-auto mb-3 md:mb-4 overflow-hidden shadow-md border-4 border-teal-500">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Heramb"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg md:text-xl font-bold text-gray-800">{profileName}</h2>
        <p className="text-xs md:text-sm text-teal-600 mt-1">Account: {accountNumber}</p>
      </div>

      <nav className="flex-1 space-y-2 md:space-y-3">
        {navConfig.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={buttonClasses(key)}
            onClick={() => handleNavigate(key)}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm md:text-base">{label}</span>
          </button>
        ))}
      </nav>

      <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
        <button
          className={buttonClasses("settings")}
          onClick={() => handleNavigate("settings")}
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm md:text-base">Account Settings</span>
        </button>

        <button
          className="w-full py-3 px-4 rounded-xl font-semibold bg-red-50 hover:bg-red-100 transition flex items-center gap-3 text-red-600"
          onClick={() => {
            onLogout();
            setIsMobileMenuOpen(false);
          }}
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm md:text-base">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-teal-600 border-2 border-teal-100"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-teal-100 p-4 md:p-6 flex-col shadow-lg">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white border-r border-teal-100 p-6 flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>
        <SidebarContent />
      </aside>
    </>
  );
}

