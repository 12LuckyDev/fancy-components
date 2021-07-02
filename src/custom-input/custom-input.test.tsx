import React from "react";
import { render } from "@testing-library/react";

import CustomInput from "./custom-input";
import { CustomInputProps } from "./custom-input.types";

describe("Test Component", () => {
  let props: CustomInputProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CustomInput {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CustomInput");

    expect(component).toHaveTextContent("harvey was here");
  });
});
