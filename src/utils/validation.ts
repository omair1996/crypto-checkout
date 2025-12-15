import { CheckoutFormData, FormErrors } from "@/types";

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ""));
};

export const isValidAccountNumber = (accountNumber: string): boolean => {
  const accountRegex = /^\d{10}$/;
  return accountRegex.test(accountNumber);
};

export const validateStep1 = (formData: CheckoutFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.payFrom) {
    errors.payFrom = "Please select a payment source";
  }

  if (!formData.payTo) {
    errors.payTo = "Please select a payment destination";
  }

  if (!formData.payAmount || parseFloat(formData.payAmount) <= 0) {
    errors.payAmount = "Please enter a valid amount";
  }

  return errors;
};

export const validateStep2 = (formData: CheckoutFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.bank) {
    errors.bank = "Please select a bank";
  }

  if (!formData.accountNumber) {
    errors.accountNumber = "Please enter account number";
  } else if (!isValidAccountNumber(formData.accountNumber)) {
    errors.accountNumber = "Account number must be 10 digits";
  }

  return errors;
};

export const validateStep3 = (formData: CheckoutFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.recipientEmail) {
    errors.recipientEmail = "Please enter recipient email";
  } else if (!isValidEmail(formData.recipientEmail)) {
    errors.recipientEmail = "Please enter a valid email";
  }

  if (!formData.recipientPhone) {
    errors.recipientPhone = "Please enter recipient phone number";
  } else if (!isValidPhoneNumber(formData.recipientPhone)) {
    errors.recipientPhone = "Please enter a valid phone number (10-11 digits)";
  }

  return errors;
};
