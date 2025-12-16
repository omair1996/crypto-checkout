import { render, screen, fireEvent } from "@testing-library/react";
import { PhoneInput } from "../PhoneInput";

describe("PhoneInput Component", () => {
  it("renders phone input with label", () => {
    render(<PhoneInput value="" onChange={() => {}} />);
    expect(screen.getByText("Recipient phone number")).toBeInTheDocument();
  });

  it("displays country code", () => {
    render(<PhoneInput value="" onChange={() => {}} />);
    expect(screen.getByText("+234")).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<PhoneInput value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("000 - 000 - 00000");
    fireEvent.change(input, { target: { value: "8012345678" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("displays error message when error prop is provided", () => {
    render(
      <PhoneInput value="" onChange={() => {}} error="Invalid phone number" />
    );
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("applies error styles when error is present", () => {
    render(<PhoneInput value="" onChange={() => {}} error="Error" />);
    const input = screen.getByPlaceholderText("000 - 000 - 00000");
    expect(input).toHaveClass("border-red-500");
  });
});
