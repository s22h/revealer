import typescript from "rollup-plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/revealer.ts",
	output: [
		{
			file: "dist/revealer.js",
			format: "esm"
		},
		{
			file: "dist/revealer.min.js",
			format: "esm",
			plugins: [
				terser()
			]
		}
	],
	plugins: [
		typescript()
	]
};
