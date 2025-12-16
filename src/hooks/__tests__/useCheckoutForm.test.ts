import { renderHook, act } from "@testing-library/react";
import { useCheckoutForm } from "../useCheckoutForm";

describe("useCheckoutForm Hook", () => {
  it("initializes with default values", () => {
    const { result } = renderHook(() => useCheckoutForm());

    expect(result.current.step).toBe(1);
    expect(result.current.formData.payAmount).toBe("1.00");
    expect(result.current.isLoading).toBe(false);
  });

  it("updates form data correctly", () => {
    const { result } = renderHook(() => useCheckoutForm());

    act(() => {
      result.current.updateFormData({ payFrom: "Metamask" });
    });

    expect(result.current.formData.payFrom).toBe("Metamask");
  });

  it("clears errors when form data is updated", () => {
    const { result } = renderHook(() => useCheckoutForm());

    act(() => {
      result.current.nextStep();
    });

    expect(Object.keys(result.current.errors).length).toBeGreaterThan(0);

    act(() => {
      result.current.updateFormData({ payFrom: "Metamask" });
    });

    expect(result.current.errors.payFrom).toBeUndefined();
  });

  it("does not proceed to next step with validation errors", () => {
    const { result } = renderHook(() => useCheckoutForm());

    act(() => {
      result.current.nextStep();
    });

    expect(result.current.step).toBe(1);
    expect(Object.keys(result.current.errors).length).toBeGreaterThan(0);
  });

  it("proceeds to next step when validation passes", () => {
    const { result } = renderHook(() => useCheckoutForm());

    act(() => {
      result.current.updateFormData({
        payFrom: "Metamask",
        payTo: "USDT-CELO",
        payAmount: "1.00",
      });
    });

    act(() => {
      result.current.nextStep();
    });

    expect(result.current.step).toBe(2);
  });

  it("goes back to previous step", () => {
    const { result } = renderHook(() => useCheckoutForm());

    act(() => {
      result.current.updateFormData({
        payFrom: "Metamask",
        payTo: "USDT-CELO",
        payAmount: "1.00",
      });
    });

    act(() => {
      result.current.nextStep();
    });

    expect(result.current.step).toBe(2);

    act(() => {
      result.current.prevStep();
    });

    expect(result.current.step).toBe(1);
  });
});
