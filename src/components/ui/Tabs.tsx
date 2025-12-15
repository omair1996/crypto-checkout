import React from "react";
import { Tab } from "@/types";

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`flex gap-1 sm:gap-2 bg-gray-100 p-1 rounded-full overflow-x-auto scrollbar-hide ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap text-xs sm:text-sm md:text-base flex-shrink-0 ${
            activeTab === tab.id
              ? "bg-[#013941] text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
