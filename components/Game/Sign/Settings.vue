<template>
	<div class="sign-settings">
		<div>
			<svg class="gear" @click="this.visible =! this.visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8074 0H10.1927C9.52726 0 8.9878 0.537258 8.9878 1.2V2.00932C8.9878 2.52768 8.6503 2.98053 8.17268 3.18654C7.48751 3.48208 6.84357 3.85454 6.25186 4.293C5.83425 4.60245 5.27165 4.6671 4.82087 4.40789L4.11489 4.00195C3.5386 3.67058 2.80169 3.86723 2.46897 4.44118L0.661627 7.55887C0.328904 8.13283 0.526356 8.86673 1.10265 9.1981L1.80802 9.60369C2.2583 9.86261 2.48344 10.3794 2.42418 10.8938C2.38237 11.2568 2.36088 11.6259 2.36088 12C2.36088 12.3741 2.38237 12.7432 2.42418 13.1062C2.48345 13.6207 2.2583 14.1374 1.80802 14.3963L1.10265 14.8019C0.526356 15.1333 0.328904 15.8672 0.661627 16.4411L2.46897 19.5588C2.80169 20.1328 3.5386 20.3294 4.11489 19.9981L4.82088 19.5921C5.27167 19.3329 5.83426 19.3976 6.25187 19.707C6.84358 20.1455 7.48751 20.5179 8.17268 20.8135C8.6503 21.0195 8.9878 21.4723 8.9878 21.9907V22.8C8.9878 23.4627 9.52726 24 10.1927 24H13.8074C14.4728 24 15.0123 23.4627 15.0123 22.8V21.9907C15.0123 21.4723 15.3498 21.0195 15.8274 20.8135C16.5125 20.5179 17.1565 20.1455 17.7482 19.7071C18.1658 19.3976 18.7284 19.333 19.1791 19.5922L19.8851 19.9981C20.4614 20.3295 21.1983 20.1328 21.531 19.5589L23.3384 16.4412C23.6711 15.8672 23.4736 15.1333 22.8974 14.802L22.1921 14.3964C21.7418 14.1375 21.5166 13.6207 21.5759 13.1063C21.6177 12.7433 21.6392 12.3741 21.6392 12C21.6392 11.6259 21.6177 11.2567 21.5759 10.8937C21.5166 10.3793 21.7418 9.86253 22.1921 9.60361L22.8974 9.19807C23.4736 8.8667 23.6711 8.13279 23.3384 7.55884L21.531 4.44115C21.1983 3.8672 20.4614 3.67055 19.8851 4.00192L19.1792 4.40785C18.7284 4.66705 18.1658 4.60241 17.7482 4.29296C17.1565 3.85452 16.5126 3.48207 15.8274 3.18654C15.3498 2.98053 15.0123 2.52768 15.0123 2.00932V1.2C15.0123 0.537259 14.4728 0 13.8074 0ZM11.9465 18C15.2737 18 17.971 15.3137 17.971 12C17.971 8.68629 15.2737 6 11.9465 6C8.61928 6 5.92203 8.68629 5.92203 12C5.92203 15.3137 8.61928 18 11.9465 18Z" fill="#fff4"/>
			</svg>
			<div class="settings" v-if="visible">
				<span @click="play">asidfalisdufhaoisdzbaousgfbal</span>
				<pre>
					{{ settings }}
				</pre>
				<br>
				<br>
				<div class="btn" @click="closeGame">Quit game</div>

			</div>

		</div>
	</div>
</template>

<script>
import { ref as firestoreRef, set } from "firebase/database"

export default {
	props: ['settings'],
	data(){
		return {
			visible: false
		}
	},
	mounted(){
		this.settings
	},
	methods: {
		closeGame(){
			const rtdb = useRTDB() 
			const route = useRoute()

			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'player_ready')
		},
		play(){
			console.log('trying to play sound !')
			const beep = new Audio(require('@/assets/audio/loose.mp3'))
			beep.play()
		}
	}
}
</script>

<style lang="sass">
.sign-settings
	z-index: 1000
.gear
	width: 40px
	height: 40px
	position: absolute
	top: 0
	left: 0
	padding: 10px
	z-index: 1001
	cursor: pointer
.settings
	position: absolute
	width: calc(100% - 60px)
	height: auto
	top:0
	left:0
	background: #fff8
	padding: 55px 30px 
	.btn
		display: inline-block
		border: 1px solid white
		border-radius: 10px
		color: white
		padding: 10px 
		cursor: pointer
</style>