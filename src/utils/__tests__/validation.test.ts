import {
  isValidEmail,
  isValidPhoneNumber,
  isValidAccountNumber,
  validateStep1,
  validateStep2,
  validateStep3,
} from "../validation";
import { CheckoutFormData } from "@/types";

describe("Validation Utilities", () => {
  describe("isValidEmail", () => {
    it("returns true for valid email", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
    });

    it("returns false for invalid email", () => {
      expect(isValidEmail("invalid")).toBe(false);
      expect(isValidEmail("test@")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
    });
  });

  describe("isValidPhoneNumber", () => {
    it("returns true for valid phone number", () => {
      expect(isValidPhoneNumber("8012345678")).toBe(true);
      expect(isValidPhoneNumber("08012345678")).toBe(true);
      expect(isValidPhoneNumber("801-234-5678")).toBe(true);
    });

    it("returns false for invalid phone number", () => {
      expect(isValidPhoneNumber("123")).toBe(false);
      expect(isValidPhoneNumber("abcdefghij")).toBe(false);
    });
  });

  describe("isValidAccountNumber", () => {
    it("returns true for valid 10-digit account number", () => {
      expect(isValidAccountNumber("1234567890")).toBe(true);
    });

    it("returns false for invalid account number", () => {
      expect(isValidAccountNumber("123")).toBe(false);
      expect(isValidAccountNumber("12345678901")).toBe(false);
      expect(isValidAccountNumber("abcd123456")).toBe(false);
    });
  });

  describe("validateStep1", () => {
    const mockFormData: CheckoutFormData = {
      payAmount: "1.00",
      payCurrency: "ETH",
      receiveAmount: "1.00",
      receiveCurrency: "NGN",
      payFrom: "Metamask",
      payTo: "USDT-CELO",
      bank: "",
      accountNumber: "",
      accountName: "",
      recipientEmail: "",
      recipientPhone: "",
    };

    it("returns no errors for valid data", () => {
      const errors = validateStep1(mockFormData);
      expect(Object.keys(errors).length).toBe(0);
    });

    it("returns error when payFrom is empty", () => {
      const errors = validateStep1({ ...mockFormData, payFrom: "" });
      expect(errors.payFrom).toBeDefined();
    });

    it("returns error when payTo is empty", () => {
      const errors = validateStep1({ ...mockFormData, payTo: "" });
      expect(errors.payTo).toBeDefined();
    });

    it("returns error when payAmount is invalid", () => {
      const errors = validateStep1({ ...mockFormData, payAmount: "0" });
      expect(errors.payAmount).toBeDefined();
    });
  });

  describe("validateStep2", () => {
    const mockFormData: CheckoutFormData = {
      payAmount: "1.00",
      payCurrency: "ETH",
      receiveAmount: "1.00",
      receiveCurrency: "NGN",
      payFrom: "Metamask",
      payTo: "USDT-CELO",
      bank: "GTBank",
      accountNumber: "1234567890",
      accountName: "Test User",
      recipientEmail: "",
      recipientPhone: "",
    };

    it("returns no errors for valid data", () => {
      const errors = validateStep2(mockFormData);
      expect(Object.keys(errors).length).toBe(0);
    });

    it("returns error when bank is empty", () => {
      const errors = validateStep2({ ...mockFormData, bank: "" });
      expect(errors.bank).toBeDefined();
    });

    it("returns error when accountNumber is invalid", () => {
      const errors = validateStep2({ ...mockFormData, accountNumber: "123" });
      expect(errors.accountNumber).toBeDefined();
    });
  });

  describe("validateStep3", () => {
    const mockFormData: CheckoutFormData = {
      payAmount: "1.00",
      payCurrency: "ETH",
      receiveAmount: "1.00",
      receiveCurrency: "NGN",
      payFrom: "Metamask",
      payTo: "USDT-CELO",
      bank: "GTBank",
      accountNumber: "1234567890",
      accountName: "Test User",
      recipientEmail: "test@example.com",
      recipientPhone: "8012345678",
    };

    it("returns no errors for valid data", () => {
      const errors = validateStep3(mockFormData);
      expect(Object.keys(errors).length).toBe(0);
    });

    it("returns error for invalid email", () => {
      const errors = validateStep3({
        ...mockFormData,
        recipientEmail: "invalid",
      });
      expect(errors.recipientEmail).toBeDefined();
    });

    it("returns error for invalid phone number", () => {
      const errors = validateStep3({ ...mockFormData, recipientPhone: "123" });
      expect(errors.recipientPhone).toBeDefined();
    });
  });
});
