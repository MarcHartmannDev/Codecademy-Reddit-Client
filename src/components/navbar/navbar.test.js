import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar", () => {
  test("renders Navbar", async () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
  });
});
