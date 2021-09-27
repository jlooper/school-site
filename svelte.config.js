import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    target: "#svelte"
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
