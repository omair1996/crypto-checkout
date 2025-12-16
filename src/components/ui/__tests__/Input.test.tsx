import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input Component", () => {
  it("renders input with label", () => {
    render(
      <Input
        label="Email"
        value=""
        onChange={() => {}}
        placeholder="Enter email"
      />
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("displays placeholder text", () => {
    render(
      <Input value="" onChange={() => {}} placeholder="Enter your name" />
    );
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} placeholder="Type here" />);

    const input = screen.getByPlaceholderText("Type here");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("displays error message when error prop is provided", () => {
    render(
      <Input value="" onChange={() => {}} error="This field is required" />
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("applies error styles when error is present", () => {
    render(
      <Input
        value=""
        onChange={() => {}}
        error="Error message"
        placeholder="Input"
      />
    );
    const input = screen.getByPlaceholderText("Input");
    expect(input).toHaveClass("border-red-500");
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Input
        value=""
        onChange={() => {}}
        disabled
        placeholder="Disabled input"
      />
    );
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("accepts different input types", () => {
    render(
      <Input
        type="email"
        value=""
        onChange={() => {}}
        placeholder="Email input"
      />
    );
    const input = screen.getByPlaceholderText("Email input");
    expect(input).toHaveAttribute("type", "email");
  });
});
