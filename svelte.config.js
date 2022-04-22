import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		paths: { base: '/tools' },
		adapter: adapter(),
		prerender: { default: true },
		vite: {
			optimizeDeps: { exclude: ['codejar'] },
			mode: 'production',
			// TO ANYONE READING THIS FILE: MAKE SURE YOU HAVE THAT NEXT LINE OTHERWISE GITHUB PAGES WONT WORK. GITHUB PAGES DOESN"T ALLOW FOLDERS STARTING WITH "_"
			appDir: 'internal',
			resolve: {
				alias: {
					$public: resolve('public'),
					$scripts: resolve('scripts'),
					$routes: resolve('src/routes'),
					$components: resolve('src/components'),
					$tools: resolve('src/tools'),
					$helpers: resolve('src/helpers')
				}
			}
		}
	}
};

export default config;
