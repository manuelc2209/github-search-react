import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Input } from "./";

test("render an Input Component", () => {
  const component = render(<Input />);
  expect(component).toMatchSnapshot();
});

test("render an Input with a custom value", () => {
  const component = render(<Input value="123123" />);
  expect(component).toMatchSnapshot();
});

test("render an Input with the keypress mocked callbacks", async () => {
  const mockedKeypressCb = jest.fn();
  const component = render(<Input onKeyPress={mockedKeypressCb} />);
  const input = await component.findByTestId("StyledInput");
  input.focus();
  fireEvent.keyPress(input, { key: "a", code: 65, charCode: 65 });
  expect(component).toMatchSnapshot();
});

test("render an Input with the change mocked callbacks", async () => {
  const mockedChangeCb = jest.fn();
  const component = render(<Input onChange={mockedChangeCb} />);
  const input = await component.findByTestId("StyledInput");
  input.focus();
  fireEvent.change(input, {
    target: { value: "text" },
  });
  expect(component).toMatchSnapshot();
});
