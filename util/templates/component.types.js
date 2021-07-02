const toUpperCammelCase = require("../to-upper-cammel-case");

module.exports = (componentName) => {
	const cammelCaseName = toUpperCammelCase(componentName);

	return {
		content: `export interface ${cammelCaseName}Props {
    foo: string;
}
`,
		extension: `.types.ts`,
	};
};
