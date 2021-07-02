const toUpperCammelCase = require("../to-upper-cammel-case");

module.exports = (componentName) => {
	const cammelCaseName = toUpperCammelCase(componentName);

	return {
		content: `import React from "react";
import { ${cammelCaseName}Props } from "./${componentName}.types";
  
const ${cammelCaseName}: React.FC<${cammelCaseName}Props> = ({ foo }) => (
	<div data-testid="${cammelCaseName}">{foo}</div>
);

export default ${cammelCaseName};
`,
		extension: `.tsx`,
	};
};
