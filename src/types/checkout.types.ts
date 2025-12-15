export interface Currency {
  code: string;
  name: string;
  icon: string;
}

export interface Wallet {
  id: string;
  name: string;
  icon: string;
}

export interface CheckoutFormData {
  payAmount: string;
  payCurrency: string;
  receiveAmount: string;
  receiveCurrency: string;
  payFrom: string;
  payTo: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  recipientEmail: string;
  recipientPhone: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface Tab {
  id: string;
  label: string;
}

export type CheckoutStep = 1 | 2 | 3;

export interface SelectOption {
  id?: string;
  name?: string;
  label?: string;
  icon?: string;
}
