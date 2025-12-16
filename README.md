# Crypto Checkout - Frontend Assessment

A production-ready crypto checkout experience built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This application provides a seamless multi-step payment flow for converting cryptocurrency to fiat currency.

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/omair1996/crypto-checkout.git
cd crypto-checkout

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open your browser

 Navigate to http://localhost:3000
```

That's it! The application should now be running locally.

---

## Available Scripts

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types (add this to package.json)

# Testing
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

---

## Project Structure

```
crypto-checkout/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
├── │   │   ├── _tests__/
│   │   │   │      ├── Button.test.tsx
│   │   │   │      ├── Input.test.tsx
│   │   │   │      ├── Select.test.tsx
│   │   │   │      ├── PhoneInput.test.tsx
│   │   │   │      ├── Tabs.test.tsx
│   │   │   │      └── CurrencySelector.test.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── PhoneInput.tsx
│   │   │   ├── CurrencySelector.tsx
│   │   │   └── Tabs.tsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── CheckoutStep1.tsx
│   │   │   ├── CheckoutStep2.tsx
│   │   │   ├── CheckoutStep3.tsx
│   │   │   └── ProgressIndicator.tsx
│   │   │
│   │   └── CryptoCheckout.tsx
│   │
│   ├── types/
│   │   ├── index.ts
│   │   └── checkout.types.ts
│   │
│   ├── hooks/
├── │   ├── __tests__/
│   │   │      └── useCheckoutForm.test.ts
│   │   └── useCheckoutForm.ts
│   │
│   ├── utils/
├── │   ├──  __tests__/
│   │   │        └── validation.test.ts
│   │   └── validation.ts
│   │
│   └── constants/
│       └── currencies.ts
│
├── jest.config.js
├── jest.setup.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## Features Implemented

### Core Requirements

- **TypeScript** - Fully typed codebase
- **Next.js 14** - Using App Router
- **Tailwind CSS** - Utility-first styling
- **Responsive Design** - Mobile and desktop optimized
- **Reusable Components** - Clean component architecture

### Functional Features

- **Multi-step Form** - 3-step checkout flow
- **Form Validation** - Real-time validation with error messages
- **Currency Selection** - Crypto and fiat currencies with search
- **Wallet Integration** - Multiple wallet options (MetaMask, Rainbow, etc.)
- **Bank Account Input** - Nigerian bank selection with account validation
- **Contact Information** - Email and phone validation
- **Loading States** - Visual feedback for async operations
- **Progress Indicator** - Clear step tracking
- **Error Handling** - User-friendly error messages

### Technical Features

- **Component Structure** - Organized by feature and UI
- **Custom Hooks** - Separated business logic
- **Type Safety** - Comprehensive TypeScript types
- **Validation Utils** - Reusable validation functions
- **Constants Management** - Centralized data
- **Clean Code** - Follows best practices
- **Comprehensive Testing** - Unit tests for all components

---

## User Flow

1. **Step 1: Currency Selection**

   - User selects amount and cryptocurrencies
   - Selects payment destination (stablecoin)
   - Chooses payment source (wallet)

2. **Step 2: Bank Details**

   - User selects their bank
   - Enters 10-digit account number
   - Account name auto-populated (simulated)

3. **Step 3: Contact Information**
   - User enters recipient email
   - Enters phone number with country code
   - Submits to complete transaction

---

## Technology Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| Next.js 14   | React framework with App Router |
| TypeScript   | Type-safe development           |
| Tailwind CSS | Styling and responsive design   |
| Lucide React | Icon library                    |
| React Hooks  | State and logic management      |
| Jest         | Testing framework               |

---

## Responsive Design

The application is fully responsive and works seamlessly across:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

---

## Code Quality

### TypeScript

- Strict type checking enabled
- All components fully typed
- Type definitions organized in `/types`

### Component Architecture

- **UI Components** - Pure, reusable components
- **Checkout Components** - Feature-specific components
- **Custom Hooks** - Business logic separation
- **Utils** - Pure functions for validation

### Best Practices

- Component composition
- Props interface definitions
- Error boundary ready
- Accessibility considerations
- Clean imports with path aliases (`@/`)

---

## Design Implementation

The UI closely follows the provided Figma designs with:

- Custom color palette (`#0A3D3D` primary)
- Rounded corners (2xl for cards, full for buttons)
- Consistent spacing (Tailwind's spacing scale)
- Smooth transitions
- Professional typography

---

## Testing the Application

### Manual Testing Checklist

**Step 1:**

- [ ] Select amount and currencies
- [ ] Choose wallet (MetaMask, Rainbow, etc.)
- [ ] Select stablecoin destination
- [ ] Click "Convert now"
- [ ] Verify validation errors appear if fields empty

**Step 2:**

- [ ] Select bank from dropdown
- [ ] Enter 10-digit account number
- [ ] Verify validation for incorrect length
- [ ] Click "Next"

**Step 3:**

- [ ] Enter valid email address
- [ ] Enter phone number (10-11 digits)
- [ ] Verify validation for invalid formats
- [ ] Click "Next" to submit
- [ ] Success message should appear

---

## Notes for Reviewers

### Architecture Decisions

1. **Separated UI components** - All reusable components in `components/ui/` for easy maintenance
2. **Custom hook for form logic** - `useCheckoutForm` handles all state and validation logic
3. **Validation utilities** - Centralized validation functions in `utils/validation.ts`
4. **Type-first approach** - All types defined before implementation
5. **Constants file** - All static data (currencies, banks, wallets) in one place

---

## Known Limitations

- This is a frontend-only implementation (no backend)
- Form submission simulates API call with 2-second delay
- Account name is mocked
- No actual blockchain/wallet integration
- Success state shows alert (would normally redirect or show confirmation page)

---

## Questions or Issues?

If you encounter any issues running the application:

1. Ensure Node.js version is 18.17 or later
2. Delete `node_modules` and `package-lock.json`, then run `npm install` again
3. Clear Next.js cache: `rm -rf .next`
4. Check that all files are in their correct locations per the project structure

---

**Built with attention to detail and production-ready standards**
