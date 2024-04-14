import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders the app", async () => {
  // renders App component and expect it to have Vite + React words
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
