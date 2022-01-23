import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render the app", () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
