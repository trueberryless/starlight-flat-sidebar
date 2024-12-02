// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          slug: "guides",
        },
        {
          label: "Reference",
          slug: "reference",
        },
      ],
      customCss: ["./src/styles/flat-sidebar.css"],
    }),
  ],
});
