import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 10000, // Adjust chunk size warning limit (in kbs)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor and source code into separate chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Group other dependencies
          // Add any large dependencies here to split them into separate chunks
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
