import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  beforeAll(() => {
    console.log(
      "Before All: For running some code before all the test cases in this suite"
    );
  });
  beforeEach(() => {
    console.log(
      "Before Each: For running some code before each and every test cases in this suite"
    );
  });

  afterAll(() => {
    console.log(
      "After All: For running some code after all the test cases in this suite"
    );
  });
  afterEach(() => {
    console.log(
      "After Each: For running some code after each and every test cases in this suite"
    );
  });

  test("Should load contact us component", () => {
    // This will render to jsdon
    render(<Contact />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes[0]);

    expect(inputBoxes.length).toBe(2);
  });
});
