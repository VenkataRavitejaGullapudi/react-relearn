import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  expect(screen.getByText(MOCK_DATA.name)).toBeInTheDocument();
});
