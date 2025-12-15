import React from "react";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Button } from "@/components/ui/Button";
import { CheckoutFormData, FormErrors } from "@/types";

interface CheckoutStep3Props {
  formData: CheckoutFormData;
  errors: FormErrors;
  isLoading: boolean;
  onFormChange: (updates: Partial<CheckoutFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const CheckoutStep3: React.FC<CheckoutStep3Props> = ({
  formData,
  errors,
  isLoading,
  onFormChange,
  onSubmit,
  onBack,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h2 className="text-2xl font-bold text-primary">Recipient details</h2>
      </div>

      <Input
        label="Recipient email"
        type="email"
        placeholder="Enter recipient email"
        value={formData.recipientEmail}
        onChange={(e) => onFormChange({ recipientEmail: e.target.value })}
        error={errors.recipientEmail}
      />

      <PhoneInput
        value={formData.recipientPhone}
        onChange={(e) => onFormChange({ recipientPhone: e.target.value })}
        error={errors.recipientPhone}
      />

      <Button onClick={onSubmit} fullWidth disabled={isLoading}>
        {isLoading ? "Processing..." : "Next"}
      </Button>
    </div>
  );
};
