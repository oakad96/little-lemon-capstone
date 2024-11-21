import React from "react";
import { render, screen } from "@testing-library/react";
import FeaturedDishes from "./FeaturedDishes";

// Mock next/image since it's not available in test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage({ src, alt, width, height }: any) {
    return <img src={src} alt={alt} width={width} height={height} />;
  },
}));

describe("FeaturedDishes", () => {
  const mockFeaturedDishes = [
    {
      name: "Spaghetti Carbonara",
      price: "$15.99",
      description: "Classic Italian pasta dish",
      image: "/images/carbonara.jpg",
    },
    {
      name: "Margherita Pizza",
      price: "$12.99",
      description: "Traditional Neapolitan pizza",
      image: "/images/pizza.jpg",
    },
  ];

  it("renders featured dishes correctly", () => {
    render(<FeaturedDishes featuredDishes={mockFeaturedDishes} />);

    // Check if section title is present
    expect(screen.getByText("Featured Dishes")).toBeInTheDocument();

    // Check if all dishes are rendered
    mockFeaturedDishes.forEach((dish) => {
      expect(screen.getByText(dish.name)).toBeInTheDocument();
      expect(screen.getByText(dish.price)).toBeInTheDocument();
      expect(screen.getByText(dish.description)).toBeInTheDocument();
      expect(screen.getByAlt(dish.name)).toBeInTheDocument();
    });
  });

  it("renders empty state when no dishes provided", () => {
    render(<FeaturedDishes featuredDishes={[]} />);

    expect(screen.getByText("Featured Dishes")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
