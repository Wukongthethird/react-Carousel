import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card  from "./Card";

it("Displays Card on DOM", function() {
  const { container, debug } = render(<Card caption="Rithm" src="School" currNum={1} totalNum={4}/>);
  debug(container);

  expect(container).toMatchSnapshot();
  expect(container.querySelector(".Card-small")).toContainHTML("Image" );
  expect(container.querySelector(".Card")).toContainHTML("School" );
  expect(container.querySelector(".Card-small")).not.toContainHTML("School");
});

