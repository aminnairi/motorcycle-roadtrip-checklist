import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sitemap from "vite-plugin-sitemap";
import { Page } from "./src/pages";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      sitemap({
        hostname: "https://aminnairi.github.io/motorcycle-roadtrip-checklist/",
        outDir: "docs",
        dynamicRoutes: [
          Page.Home,
          Page.Hidden
        ]
      })
    ],
    server: {
      host: "0.0.0.0"
    },
    base: mode === "production" ? "/motorcycle-roadtrip-checklist/" : "/",
    build: {
      outDir: "docs"
    }
  };
})
