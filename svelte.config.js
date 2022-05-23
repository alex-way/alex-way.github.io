import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex(mdsvexConfig)
  ],
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/alex-way.github.io'
    },
    prerender: { default: true }
  }
};

export default config;
