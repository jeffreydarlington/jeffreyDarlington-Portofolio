import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jeffreyDarlington-Portofolio/",
  plugins: [react()],
  publicDir: path.resolve(__dirname, "p/"),
  server: {
    fs: {
      deny: [path.resolve(__dirname, "private.txt")]
    }
  }
});
