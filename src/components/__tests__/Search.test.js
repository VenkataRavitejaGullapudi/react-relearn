const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// "global" is a Global object where the components that we render are present
global.fetch = jest.fn(() => {
  // Mocking the fetch function as fetch function is provided by browser
  // and which will be not available with our testing env and also we cannot make network call
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search rest list for pizza text input", async () => {
  // Whenever we are having async operations or state updates
  // We need to wrap our render function with act function which is from react-dom test utils
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", {
    name: "Search",
  });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: {
      value: "Pizza",
    },
  });
  console.log(searchInput);
  fireEvent.click(searchBtn);

  expect(screen.getAllByTestId("resCard").length).toBe(3);
});

it("Should filter top rated restaurants", async () => {
  // Whenever we are having async operations or state updates
  // We need to wrap our render function with act function which is from react-dom test utils
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforefilter = screen.getAllByTestId("resCard");

  expect(cardsBeforefilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
