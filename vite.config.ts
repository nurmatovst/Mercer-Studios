import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // ✅ Split vendor libraries into separate chunks
        // so your app code and library code cache independently
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "i18n-vendor": ["i18next", "react-i18next", "i18next-browser-languagedetector"],
          "ui-vendor": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip"],
        },
      },
    },
    // ✅ Compress output
    minify: "esbuild",
    // ✅ Warn if any chunk exceeds 500kb
    chunkSizeWarningLimit: 500,
  },
});