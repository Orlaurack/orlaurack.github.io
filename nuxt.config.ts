import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
	devServer: {     
    port: 8000, // default: 3000     
    host: '172.22.22.55', // default: localhost   
  },   
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
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],			
		}
	}
})
