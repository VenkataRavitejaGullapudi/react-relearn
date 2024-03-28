import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/restaurantMenu.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText(/Personal Slice Veg Pizza/);
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(20);

  const addBtns = screen.getAllByRole("button", {
    name: "Add +",
  });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  // As we are reusing the same ItemList component, we have same testId as above in the restaurant menu for food items
  // As we selected one there should be 21 food items along with above 20
  expect(screen.getAllByTestId("foodItem").length).toBe(21);

  const clearCartBtn = screen.getByRole("button", {
    name: "Clear cart",
  });
  fireEvent.click(clearCartBtn);
  //   After clearing cart it should be 20 again
  expect(screen.getAllByTestId("foodItem").length).toBe(20);
});
