import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "../Select";

describe("Select Component", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];

  it("renders select with label", () => {
    render(
      <Select
        label="Choose option"
        value=""
        onChange={() => {}}
        options={mockOptions}
        placeholder="Select"
      />
    );
    expect(screen.getByText("Choose option")).toBeInTheDocument();
  });

  it("displays placeholder when no value is selected", () => {
    render(
      <Select
        value=""
        onChange={() => {}}
        options={mockOptions}
        placeholder="Select an option"
      />
    );
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("opens dropdown when clicked", () => {
    render(
      <Select
        value=""
        onChange={() => {}}
        options={mockOptions}
        placeholder="Select"
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("calls onChange when option is selected", () => {
    const handleChange = jest.fn();
    render(
      <Select
        value=""
        onChange={handleChange}
        options={mockOptions}
        placeholder="Select"
      />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 2"));

    expect(handleChange).toHaveBeenCalledWith("Option 2");
  });

  it("displays selected value", () => {
    render(
      <Select
        value="Option 2"
        onChange={() => {}}
        options={mockOptions}
        placeholder="Select"
      />
    );
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("displays error message when error prop is provided", () => {
    render(
      <Select
        value=""
        onChange={() => {}}
        options={mockOptions}
        error="Please select an option"
      />
    );
    expect(screen.getByText("Please select an option")).toBeInTheDocument();
  });

  it("clears search when dropdown closes", () => {
    render(
      <Select
        value=""
        onChange={() => {}}
        options={["Apple", "Banana"]}
        placeholder="Select"
      />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "App" },
    });

    fireEvent.mouseDown(document.body);
    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByPlaceholderText("Search")).toHaveValue("");
  });

  it("handles options with objects", () => {
    const objectOptions = [
      { name: "First", icon: "" },
      { name: "Second", icon: "" },
    ];

    render(
      <Select
        value=""
        onChange={() => {}}
        options={objectOptions}
        placeholder="Select"
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("First")).toBeInTheDocument();
  });
});
