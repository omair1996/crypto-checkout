import React from "react";
import { ChevronDown } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  error,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-primary">
        Recipient phone number
      </label>
      <div className="flex gap-2">
        <div className="flex items-center px-4 py-4 bg-white border border-gray-200 rounded-2xl gap-2 min-w-fit">
          <span className="text-xl">🇳🇬</span>
          <span className="font-medium text-gray-900">+234</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="tel"
          value={value}
          onChange={onChange}
          placeholder="000 - 000 - 00000"
          className={`flex-1 px-6 py-4 rounded-2xl border ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:ring-primary"
          } focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
