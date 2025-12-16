import React from "react";
import { ArrowLeft } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckoutFormData, FormErrors } from "@/types";
import { BANKS } from "@/constants/currencies";

interface CheckoutStep2Props {
  formData: CheckoutFormData;
  errors: FormErrors;
  onFormChange: (updates: Partial<CheckoutFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const CheckoutStep2: React.FC<CheckoutStep2Props> = ({
  formData,
  errors,
  onFormChange,
  onNext,
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

      <Select
        label="Bank"
        placeholder="Select an option"
        value={formData.bank}
        onChange={(value) => onFormChange({ bank: value })}
        options={BANKS}
        error={errors.bank}
      />

      <Input
        label="Account number"
        placeholder="Enter your account number"
        value={formData.accountNumber}
        onChange={(e) => onFormChange({ accountNumber: e.target.value })}
        error={errors.accountNumber}
        type="number"
      />

      <Input
        label="Account name"
        value={formData.accountName}
        onChange={() => {}}
        disabled={true}
      />

      <Button onClick={onNext} fullWidth>
        Next
      </Button>
    </div>
  );
};
