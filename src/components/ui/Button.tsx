import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-4 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
};
