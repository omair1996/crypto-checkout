"use client";

import React, { useState } from "react";
import { CheckoutStep1 } from "./checkout/CheckoutStep1";
import { ProgressIndicator } from "./checkout/ProgressIndicator";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";

export const CryptoCheckout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("crypto-to-cash");

  const {
    step,
    formData,
    errors,
    isLoading,
    updateFormData,
    nextStep,
    prevStep,
    handleSubmit,
  } = useCheckoutForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {step === 1 && (
            <CheckoutStep1
              formData={formData}
              errors={errors}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onFormChange={updateFormData}
              onNext={nextStep}
            />
          )}
        </div>

        <ProgressIndicator currentStep={step} className="mt-6" />
      </div>
    </div>
  );
};
