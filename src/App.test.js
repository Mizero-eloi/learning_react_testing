import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement).toBeInTheDocument();
});

// check if the url is correct

test("url is correct", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement.href).toContain("reactjs.org");
});
