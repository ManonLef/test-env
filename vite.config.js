import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // all imports global so no need to perform these imports in each file manually
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
