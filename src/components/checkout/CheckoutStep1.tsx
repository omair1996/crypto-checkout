import React from "react";
import { Tabs } from "@/components/ui/Tabs";
import { CurrencySelector } from "@/components/ui/CurrencySelector";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CheckoutFormData, FormErrors } from "@/types";
import {
  CHECKOUT_TABS,
  CRYPTO_CURRENCIES,
  FIAT_CURRENCIES,
  WALLETS,
  STABLECOINS,
} from "@/constants/currencies";

interface CheckoutStep1Props {
  formData: CheckoutFormData;
  errors: FormErrors;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onFormChange: (updates: Partial<CheckoutFormData>) => void;
  onNext: () => void;
}

export const CheckoutStep1: React.FC<CheckoutStep1Props> = ({
  formData,
  errors,
  activeTab,
  onTabChange,
  onFormChange,
  onNext,
}) => {
  return (
    <div className="space-y-6">
      <Tabs tabs={CHECKOUT_TABS} activeTab={activeTab} onChange={onTabChange} />

      <div className="space-y-6 mt-8">
        <div className="bg-gray-50 rounded-2xl p-6">
          <label className="block text-sm text-gray-600 mb-2">You pay</label>
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={formData.payAmount}
              onChange={(e) => onFormChange({ payAmount: e.target.value })}
              className="text-4xl font-bold bg-transparent outline-none w-1/2"
              min="0"
              step="0.01"
            />
            <CurrencySelector
              value={formData.payCurrency}
              onChange={(code) => onFormChange({ payCurrency: code })}
              currencies={CRYPTO_CURRENCIES}
            />
          </div>
          {errors.payAmount && (
            <p className="text-sm text-red-500 mt-2">{errors.payAmount}</p>
          )}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <label className="block text-sm text-gray-600 mb-2">
            You receive
          </label>
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={formData.receiveAmount}
              onChange={(e) => onFormChange({ receiveAmount: e.target.value })}
              className="text-4xl font-bold bg-transparent outline-none w-1/2"
              min="0"
              step="0.01"
            />
            <CurrencySelector
              value={formData.receiveCurrency}
              onChange={(code) => onFormChange({ receiveCurrency: code })}
              currencies={FIAT_CURRENCIES}
            />
          </div>
        </div>

        <Select
          label="Pay from"
          placeholder="Select an option"
          value={formData.payFrom}
          onChange={(value) => onFormChange({ payFrom: value })}
          options={STABLECOINS}
          error={errors.payFrom}
        />

        <Select
          label="Pay to"
          placeholder="Select an option"
          value={formData.payTo}
          onChange={(value) => onFormChange({ payTo: value })}
          options={WALLETS}
          error={errors.payTo}
        />

        <Button onClick={onNext} fullWidth>
          Convert now
        </Button>
      </div>
    </div>
  );
};
