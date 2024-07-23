import { render, screen } from "@testing-library/react";
import Title_test from "./Title_test";

describe("title test", () => {
  test("Get By Title", () => {
    render(<Title_test />);
    const title = screen.getByTitle("open");
    expect(title).toBeInTheDocument();
  });
});
