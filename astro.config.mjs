import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import robots from "astro-robots";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://facilitiesfusion.com",
  integrations: [react(), tailwind(), partytown(), robots(), sitemap()]
});