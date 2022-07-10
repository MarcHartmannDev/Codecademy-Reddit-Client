import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "./searchbar";

describe("Searchbar", () => {
  test('shows default value "Search" on launch', () => {
    render(<Searchbar />);

    const textbox = screen.getByRole("textbox", { id: "searchbar" });

    expect(textbox).toHaveValue("Search");
  });

  test("deletes default value when in focus", () => {
    render(<Searchbar />);

    const textbox = screen.getByRole("textbox", { id: "searchbar" });

    userEvent.click(textbox);

    expect(textbox).toHaveValue("");
  });

  test('sets default value back to "Search", when looses focus and is empty', () => {
    render(<Searchbar />);

    const textbox = screen.getByRole("textbox", { id: "searchbar" });

    userEvent.click(textbox);
    userEvent.tab();

    expect(textbox).toHaveValue("Search");
  });

  test("keeps value when loosing focus and is not empty", () => {
    render(<Searchbar />);

    const textbox = screen.getByRole("textbox", { id: "searchbar" });

    userEvent.click(textbox);
    userEvent.type(textbox, "Hello World");
    userEvent.tab();

    expect(textbox).toHaveValue("Hello World");
  });

  test('keeps value when getting into focus and value is not "Search"', () => {
    render(<Searchbar />);

    const textbox = screen.getByRole("textbox", { id: "searchbar" });

    userEvent.click(textbox);
    userEvent.type(textbox, "Hello World");
    userEvent.tab();
    userEvent.click(textbox);

    expect(textbox).toHaveValue("Hello World");
  });
});
