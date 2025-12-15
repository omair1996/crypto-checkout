import React from "react";
import { CheckoutStep } from "@/types";

interface ProgressIndicatorProps {
  currentStep: CheckoutStep;
  totalSteps?: number;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps = 3,
  className = "",
}) => {
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={`h-2 w-12 rounded-full transition-all ${
            step === currentStep ? "bg-primary" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
