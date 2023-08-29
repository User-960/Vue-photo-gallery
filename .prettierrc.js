module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
	trailingComma: "none",
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: "avoid",
	importOrder: [
		"<THIRD_PARTY_MODULES>",
		"/ui/",
		"/hooks/",
		"/screens/",
		"/components/",
		"^../(.*)",
		"^./(.*)"
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
};