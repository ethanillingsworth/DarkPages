import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/DarkPages/",
	resolve: {
		alias: {
			// This forces Vite to always use the React version in your test/node_modules
			// eslint-disable-next-line no-undef
			react: path.resolve(__dirname, "./node_modules/react"),
			// eslint-disable-next-line no-undef
			"react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
		},
	},
});
