// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; 


// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    // adapter: node({ mode: "standalone" }),
    adapter: vercel(),
    output: "server",
});
