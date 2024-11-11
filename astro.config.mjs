import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://github.com/malikhamza88/countdown-site.git",
  base: "/countdown-site/",
  output: "static",
});
