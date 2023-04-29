<template>
	<div class="loose-menu" :class="{loose}">
		<h1>LOOSERS !</h1>
		
		<div class="btn" @click="closeGame">Quit game</div>
	</div>
</template>

<script>
import { ref as firestoreRef, set } from "firebase/database"

export default {
	props: ['loose'],
	methods: {
		closeGame(){
			const rtdb = useRTDB() 
			const route = useRoute()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'player_ready')
		}
	}
}
</script>

<style lang="sass" scoped>
.loose-menu
	pointer-events: none
	position: absolute
	top:0
	left:0
	z-index: 200
	width: 100%
	height: 100%
	transition: 1000ms
	color: transparent
	display: flex
	flex-direction: column
	align-items: center
	h1
		color: transparent
		transition: 1000ms
		flex: 1
		text-align: center
		font-size: 200px
		animation: glow 3s linear infinite, scale 2s linear infinite, rotate 0.5s linear infinite
		transform-origin: 50% 50%
	&.loose
		pointer-events: all
		background: #fff3
		backdrop-filter: blur(15px)
		h1
			color: #ff3333

		.btn
			display: inline-block
			border: 1px solid white
			border-radius: 10px
			color: white
			padding: 10px 
			cursor: pointer
			margin-bottom: 100px

@keyframes glow
	0%
		filter: grayscale(100%) brightness(150%) hue-rotate(-20deg)
	50%
		filter: grayscale(0%) brightness(80%) hue-rotate(0deg)
	100%
		filter: grayscale(100%) brightness(150%) hue-rotate(20deg)
@keyframes rotate
	0%
		transform: rotate(3deg) 
	50%
		transform: rotate(-3deg) 
	100%
		transform: rotate(3deg) 


</style>