import { render, screen } from "@testing-library/react";
import App from "./App";

it("app", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
},1);
