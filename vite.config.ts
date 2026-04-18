import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// 1. Import the plugin
import dts from "vite-plugin-dts";

// ... imports

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			insertTypesEntry: true,
			include: ["src"],
		}),
	],
	build: {
		copyPublicDir: false,
		cssCodeSplit: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["es"], // Preserve modules works best with ESM
		},
		rollupOptions: {
			// Add your CSS files as additional inputs here
			input: {
				index: path.resolve(__dirname, "src/index.ts"),
				default: path.resolve(__dirname, "src/themes/default.css"),
				// light: path.resolve(__dirname, "src/themes/light.css"),

				// Add more style entries if you have multiple specific ones
			},
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				// Keeps the folder structure
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith(".css")) {
						// This forces it into a styles folder in dist
						return "themes/[name][extname]";
					}
					return "[name][extname]";
				},
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
			},
		},
	},
});
