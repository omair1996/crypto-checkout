import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Currency } from "@/types";

interface CurrencySelectorProps {
  value: string;
  onChange: (code: string) => void;
  currencies: Currency[];
  className?: string;
}

/**
 * Currency Selector component with search functionality
 */
export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onChange,
  currencies,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedCurrency = currencies.find((c) => c.code === value);

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white border border-gray-200 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        {selectedCurrency?.icon && (
          <span className="text-xl">{selectedCurrency.icon}</span>
        )}
        <span className="font-medium text-gray-900">
          {selectedCurrency?.code || value}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 right-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredCurrencies.map((currency) => (
              <button
                key={currency.code}
                type="button"
                onClick={() => handleSelect(currency.code)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl">{currency.icon}</span>
                <span className="font-medium text-gray-900">
                  {currency.name}
                </span>
              </button>
            ))}
            {filteredCurrencies.length === 0 && (
              <div className="px-4 py-3 text-gray-500 text-center">
                No currencies found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
