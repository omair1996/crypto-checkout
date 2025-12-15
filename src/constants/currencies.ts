import { Currency, Wallet, Tab } from "@/types";

export const CRYPTO_CURRENCIES: Currency[] = [
  { code: "ETH", name: "Ethereum", icon: "💎" },
  { code: "BTC", name: "Bitcoin", icon: "₿" },
  { code: "USDT", name: "Tether", icon: "₮" },
];

export const FIAT_CURRENCIES: Currency[] = [
  { code: "NGN", name: "Nigerian Naira", icon: "🇳🇬" },
  { code: "USD", name: "US Dollar", icon: "🇺🇸" },
  { code: "EUR", name: "Euro", icon: "🇪🇺" },
];

export const STABLECOINS: Currency[] = [
  { code: "USDT-CELO", name: "USDT - CELO", icon: "🟨" },
  { code: "USDT-TON", name: "USDT - TON", icon: "🔵" },
  { code: "USDT-BNB", name: "USDT - BNB", icon: "🟡" },
];

export const WALLETS: Wallet[] = [
  { id: "metamask", name: "Metamask", icon: "🦊" },
  { id: "rainbow", name: "Rainbow", icon: "🌈" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗" },
  {
    id: "other",
    name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    icon: "💼",
  },
];

export const BANKS: string[] = [
  "Access Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Zenith Bank",
  "Wema Bank",
  "Ecobank",
  "Sterling Bank",
  "Fidelity Bank",
  "Union Bank",
];

export const CHECKOUT_TABS: Tab[] = [
  { id: "crypto-to-cash", label: "Crypto to cash" },
  { id: "cash-to-crypto", label: "Cash to crypto" },
  { id: "crypto-to-fiat-loan", label: "Crypto to fiat loan" },
];

export const INITIAL_FORM_DATA = {
  payAmount: "1.00",
  payCurrency: "ETH",
  receiveAmount: "1.00",
  receiveCurrency: "NGN",
  payFrom: "",
  payTo: "",
  bank: "",
  accountNumber: "",
  accountName: "ODUTUGA GBEKE",
  recipientEmail: "",
  recipientPhone: "",
};
