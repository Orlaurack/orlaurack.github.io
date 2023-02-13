import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
	vite: {
		plugins: [svgLoader()]
	},
	css: [
		`~/assets/sass/index.sass`,
	],
	imports: {
		dirs: [
			'composables',
			'composables/*/index.{ts,js,mjs,mts}',
			'composables/**'
		]
	},
	app: {
		baseURL: 'https://orlaurack.github.io/',
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],			
		}
	}
})
