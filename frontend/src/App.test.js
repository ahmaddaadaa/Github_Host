import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the project title", () => {
  render(<App />);
  const title = screen.getByText(
    /FPGA ML Inference Engine Using Approximate Computing/i
  );
  expect(title).toBeInTheDocument();
});
