import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";

describe("Navbar", () => {
  test("renders Navbar", async () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(container).toBeInTheDocument();
  });
});
