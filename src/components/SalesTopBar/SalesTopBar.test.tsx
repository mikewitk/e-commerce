import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SalesTopBar from "./SalesTopBar";
import "@testing-library/jest-dom";

test("renders sale text", () => {
  render(<SalesTopBar />);
  const textElement = screen.getByText(
    /summer sale for all swim suits and free express delivery - OFF 50%!/i,
  );
  expect(textElement).toBeInTheDocument();
});

test("renders a link", () => {
  render(<SalesTopBar />);
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
});

test("renders a language selector", () => {
  render(<SalesTopBar />);
  const labelElement = screen.getByLabelText(/select a language/i);
  expect(labelElement).toBeInTheDocument();
  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toBeInTheDocument();
  const optionElements = screen.getAllByRole("option");
  expect(optionElements).toHaveLength(3);
});
