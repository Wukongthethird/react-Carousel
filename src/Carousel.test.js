import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { container } = render(<Carousel />);
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  ).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

it("works when you click on the left arrow", function() {
  const { container } = render(<Carousel />);
  // move from card 1 to card 2
  fireEvent.click(container.querySelector(".fa-chevron-circle-right"));
  // move from card 2 back to card 1
  fireEvent.click(container.querySelector(".fa-chevron-circle-left"));
  expect(
    container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')).toBeInTheDocument();;
  // expect(container.querySelector(".Card-small")).toContainHTML("Image 1");
});

it("respective arrows are missing for first and last images", function() {
  const { container } = render(<Carousel />);
  expect(container.querySelector(".Carousel-main > i")).toHaveClass("hidden");

  // move from card 1 to card 2, and then 2 to 3
  fireEvent.click(container.querySelector(".fa-chevron-circle-right"));
  fireEvent.click(container.querySelector(".fa-chevron-circle-right"));
  expect(container.querySelectorAll(".Carousel-main > i")[1]).toHaveClass("hidden");
});

