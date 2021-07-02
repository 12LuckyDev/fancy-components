const toUpperCammelCase = require("../to-upper-cammel-case");

module.exports = (componentName) => {
	const cammelCaseName = toUpperCammelCase(componentName);

	return {
		content: `import React from "react";
import ${cammelCaseName} from "./${componentName}";

export default {
    title: "${cammelCaseName}"
};

export const WithBar = () => <${cammelCaseName} foo="bar" />;

export const WithBaz = () => <${cammelCaseName} foo="baz" />;
`,
		extension: `.stories.tsx`,
	};
};
