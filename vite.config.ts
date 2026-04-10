import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// 1. Import the plugin
import dts from "vite-plugin-dts";

export default defineConfig({
    // 2. Add it to the plugins array
    plugins: [
        react(),
        tailwindcss(),
        dts({
            insertTypesEntry: true, // Adds "types" to package.json entry
            include: ["src"], // Only generate types for your source code
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "DarkPages",
            formats: ["es", "cjs"],
            fileName: "index",
            cssFileName: "index",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
