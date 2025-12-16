import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { SelectOption } from "@/types";

interface SelectProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
  error?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
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

  const getDisplayValue = () => {
    if (!value) return placeholder;
    const option = options.find((opt) => {
      if (typeof opt === "string") return opt === value;
      return opt.name === value || opt.label === value;
    });
    if (typeof option === "string") return option;
    return option?.name || option?.label || value;
  };

  const handleSelect = (option: string | SelectOption) => {
    if (typeof option === "string") {
      onChange(option);
    } else {
      onChange(option.name || option.label || "");
    }
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredOptions = options.filter((option) => {
    const text =
      typeof option === "string" ? option : option.name || option.label || "";
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={`space-y-2 ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-[#013941]">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-6 py-4 rounded-2xl border ${
            error ? "border-red-500" : "border-gray-200"
          } bg-white text-left focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all flex items-center justify-between`}
        >
          <span className="text-[#013941]">{getDisplayValue()}</span>
          <ChevronDown
            className={`w-5 h-5 text-[#013941] transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg">
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
              {filteredOptions.map((option, idx) => {
                const displayText =
                  typeof option === "string"
                    ? option
                    : option.name || option.label || "";
                const icon = typeof option === "string" ? null : option.icon;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                  >
                    {icon && <span className="text-xl">{icon}</span>}
                    <span className="text-gray-900">{displayText}</span>
                  </button>
                );
              })}

              {filteredOptions.length === 0 && (
                <div className="px-4 py-3 text-gray-500 text-center">
                  No results found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
