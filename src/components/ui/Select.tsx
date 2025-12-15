import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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
  };

  return (
    <div className={`space-y-2 ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-primary">
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
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {getDisplayValue()}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-auto">
            {options.map((option, idx) => {
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
                  className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl flex items-center gap-3"
                >
                  {icon && <span className="text-xl">{icon}</span>}
                  <span className="text-gray-900">{displayText}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
