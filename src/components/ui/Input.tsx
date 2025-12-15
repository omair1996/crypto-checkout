import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: "text" | "email" | "tel" | "number";
  className?: string;
}

/**
 * Reusable Input component
 */
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  type = "text",
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-primary">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-6 py-4 rounded-2xl border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:ring-primary"
        } focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
