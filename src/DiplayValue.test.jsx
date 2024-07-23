import { render, screen } from "@testing-library/react";
import DisplayValue from "./DisplayValue";

describe("Display value", () => {
  test("should value", () => {
    render(<DisplayValue />);
    const value = screen.getByDisplayValue("Sunny");
    expect(value).toBeInTheDocument();
  });
});
