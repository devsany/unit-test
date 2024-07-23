import { render, screen } from "@testing-library/react";
import GetByAltText from "./GetByAltText";

describe("get by alt text", () => {
  test("should get by alt text", () => {
    render(<GetByAltText />);
    const getbyalttext = screen.getByAltText("github diplay page image");
    expect(getbyalttext).toBeInTheDocument();
  });
});
