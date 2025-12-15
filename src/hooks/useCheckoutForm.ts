import { useState } from "react";
import { CheckoutFormData, FormErrors, CheckoutStep } from "@/types";
import { INITIAL_FORM_DATA } from "@/constants/currencies";
import {
  validateStep1,
  validateStep2,
  validateStep3,
} from "@/utils/validation";

export const useCheckoutForm = () => {
  const [step, setStep] = useState<CheckoutStep>(1);
  const [formData, setFormData] = useState<CheckoutFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (updates: Partial<CheckoutFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    const updatedKeys = Object.keys(updates);
    setErrors((prev) => {
      const newErrors = { ...prev };
      updatedKeys.forEach((key) => delete newErrors[key]);
      return newErrors;
    });
  };

  const validateCurrentStep = (): boolean => {
    let newErrors: FormErrors = {};

    switch (step) {
      case 1:
        newErrors = validateStep1(formData);
        break;
      case 2:
        newErrors = validateStep2(formData);
        break;
      case 3:
        newErrors = validateStep3(formData);
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep((prev) => Math.min(prev + 1, 3) as CheckoutStep);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1) as CheckoutStep);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (validateCurrentStep()) {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
        alert("Payment initiated successfully!");
        setFormData(INITIAL_FORM_DATA);
        setStep(1);
      } catch (error) {
        console.error("Submission error:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    step,
    formData,
    errors,
    isLoading,
    updateFormData,
    nextStep,
    prevStep,
    handleSubmit,
  };
};
