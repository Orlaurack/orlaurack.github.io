<template>
	<div class="cross-container">
		
		<div
			class="direction-btn"
			:class="{active:up}" 
			@touchstart="moveTo('up', true)" 
			@mousedown="moveTo('up', true)" 
			@touchend="moveTo('up', false)" 
			@mouseup="moveTo('up', false)" 
			id="up"></div>
		<div
			class="direction-btn"
			:class="{active:down}" 
			@touchstart="moveTo('down', true)" 
			@mousedown="moveTo('down', true)" 
			@touchend="moveTo('down', false)" 
			@mouseup="moveTo('down', false)" 
			id="down"></div>
		<div
			class="direction-btn"
			:class="{active:right}" 
			@touchstart="moveTo('right', true)" 
			@mousedown="moveTo('right', true)" 
			@touchend="moveTo('right', false)" 
			@mouseup="moveTo('right', false)" 
			id="right"></div>
		<div
			class="direction-btn"
			:class="{active:left}" 
			@touchstart="moveTo('left', true)" 
			@mousedown="moveTo('left', true)" 
			@touchend="moveTo('left', false)" 
			@mouseup="moveTo('left', false)" 
			id="left"></div>
	</div>
</template>

<script>

export default {
	emits: [ 'changeDirection' ],
	data: ()=>{
		return {
			up: false,
			down: false,
			right: false,
			left: false
		}
	},
	methods:{
		moveTo(direction, value){
			this[direction] = value
			this.$emit('changeDirection', {direction, value})
		}
	},
	mounted(){
		console.log('ahhhhhh')
	}
}
</script>

<style lang="sass">
.cross-container
	position: absolute
	width: 100%
	height: 100%

#up
	top: 0
	height: 50%
	clip-path: polygon(5% 0%, 50% 100%, 95% 0%)
#down
	bottom: 0
	height: 50%
	clip-path: polygon(5% 100%, 50% 0, 95% 100%)
#right
	right: 0
	width: 50%
	clip-path: polygon(100% 5%, 0 50%, 100% 95%)
#left
	left: 0
	width: 50%
	clip-path: polygon(0% 5%, 100% 50%, 0% 95%)

.direction-btn
	position: absolute
	width: 100%
	height: 100%
	background-color: #f0f0f0

	&.active
		filter: brightness(80%)
		
#right, #left
	z-index: 10
#up, #down
	z-index: 1
@media ('orientation: landscape') 
	#up, #down
		z-index: 10
	#right, #left
		z-index: 1

</style>