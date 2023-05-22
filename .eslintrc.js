module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true
	},
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"prettier",
		"eslint:recommended"
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},

	plugins: ["react", "react-native"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": ["off"],
		"no-unused-vars": ["error", { vars: "all" }],
		"react/react-in-jsx-scope": ["off"],
		"@typescript-eslint/no-empty-interface": ["off"],
		"no-empty-pattern": ["off"]
	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
