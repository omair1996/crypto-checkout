import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "../Tabs";

describe("Tabs Component", () => {
  const mockTabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" },
  ];

  it("renders all tabs", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab1" onChange={() => {}} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("highlights active tab", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab2" onChange={() => {}} />);
    const activeTab = screen.getByText("Tab 2");
    expect(activeTab).toHaveClass("bg-[#013941]");
  });

  it("calls onChange when tab is clicked", () => {
    const handleChange = jest.fn();
    render(<Tabs tabs={mockTabs} activeTab="tab1" onChange={handleChange} />);

    fireEvent.click(screen.getByText("Tab 2"));
    expect(handleChange).toHaveBeenCalledWith("tab2");
  });

  it("non-active tabs have correct styling", () => {
    render(<Tabs tabs={mockTabs} activeTab="tab1" onChange={() => {}} />);
    const inactiveTab = screen.getByText("Tab 2");
    expect(inactiveTab).toHaveClass("text-gray-600");
  });
});
