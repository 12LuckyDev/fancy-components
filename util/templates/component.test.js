const toUpperCammelCase = require("../to-upper-cammel-case");

module.exports = (componentName) => {
	const cammelCaseName = toUpperCammelCase(componentName);

	return {
		content: `import React from "react";
import { render } from "@testing-library/react";

import ${cammelCaseName} from "./${componentName}";
import { ${cammelCaseName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${cammelCaseName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<${cammelCaseName} {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${cammelCaseName}");

    expect(component).toHaveTextContent("harvey was here");
  });
});
`,
		extension: `.test.tsx`,
	};
};
