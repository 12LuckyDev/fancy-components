import React from "react";
import { render } from "@testing-library/react";

import CustomLabel from "./custom-label";
import { CustomLabelProps } from "./custom-label.types";

describe("Test Component", () => {
  let props: CustomLabelProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<CustomLabel {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CustomLabel");

    expect(component).toHaveTextContent("harvey was here");
  });
});
