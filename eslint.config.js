import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ["archive/"], // excludes
	},
	{ files: ["**/*.{js,ts,jsx,tsx}"] }, // includes
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"no-unused-vars": "warn",
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
];
