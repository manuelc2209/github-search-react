import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./";

test("render an Button Component", () => {
  const component = render(<Button label="test" />);
  expect(component).toMatchSnapshot();
});

test("render an Button with a custom value", () => {
  const component = render(<Button label="test" />);
  expect(component).toMatchSnapshot();
});

test("render an Button with the click mocked callback", async () => {
  const mockedClickCb = jest.fn();
  const component = render(<Button label="test" onClick={mockedClickCb} />);
  const button = await component.findByTestId("StyledButton");
  fireEvent.click(button);
  expect(mockedClickCb).toHaveBeenCalled();
});
