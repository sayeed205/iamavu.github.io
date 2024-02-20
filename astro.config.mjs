import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: "https://iamavu.com",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "catppuccin macchiato",
      wrap: false
    }
  }
});