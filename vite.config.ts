// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // <--- Map '@' to the './src' folder
    },
  },
  // watch

  build: {
    rollupOptions: {
      input: {
        // Your content script entry
        contentScript: resolve(__dirname, "src/content/contentScript.tsx"),
      },
      output: {
        // Generate an IIFE instead of ES modules
        format: "iife",
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
