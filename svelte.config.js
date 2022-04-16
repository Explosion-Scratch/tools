import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$public: resolve('public'),
					$scripts: resolve('scripts'),
					$routes: resolve('src/routes'),
					$components: resolve('src/components'),
					$tools: resolve('src/tools')
				}
			}
		}
	}
};

export default config;
