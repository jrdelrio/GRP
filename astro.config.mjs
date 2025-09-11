// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    integrations: [react(), sitemap()],
    site: "https://www.grpingenieria.com",
    adapter: vercel(),
    output: "server"
});