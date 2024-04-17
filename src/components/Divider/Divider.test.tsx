import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Divider from "./Divider";
import "@testing-library/jest-dom";

test("renders a divider", () => {
  render(<Divider />);
  const dividerElement = screen.getByRole("separator");
  expect(dividerElement).toBeInTheDocument();
});
