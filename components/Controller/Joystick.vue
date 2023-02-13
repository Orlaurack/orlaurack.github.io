<template>
	<div class="joystick" 
		@mousedown="moveStart"
		@touchstart="moveStart"
		@mousemove="move"
		@touchmove="move"
		@mouseup="moveStop"
		@touchend="moveStop"
		@touchcancel="moveStop"
		:class="active"
	>
		<div class="zone" :style="{top: yStart+'px', left: xStart+'px'}">
		</div>
		<div class="circle" :style="{top: yCircle+'px', left: xCircle+'px'}">
		</div>
	</div>
</template>

<script>
export default {
	emits: ['changeDirection'],
	data(){
		return {
			xStart: window.innerWidth/2,
			yStart: window.innerHeight/2,
			xCircle: window.innerWidth/2,
			yCircle: window.innerHeight/2,
			active: false
		}
	},
	methods:{
		moveStart(joystick){
			this.yStart = joystick.clientY
			this.xStart = joystick.clientX
			this.yCircle = joystick.clientY
			this.xCircle = joystick.clientX
			this.active = true
		},
		move(joystick){
			if(this.active){
				console.log(joystick)
				
				const y = this.yStart - joystick.clientY
				const x = this.xStart - joystick.clientX

				var distance = Math.min(Math.sqrt(x * x + y * y), 100);
			  var direction = Math.atan2(y, x) * 180 / Math.PI;

				this.xCircle = this.xStart + ( distance * - Math.cos(direction * Math.PI / 180) );
				this.yCircle = this.yStart + ( distance * Math.sin(-direction * Math.PI / 180) );

				this.$emit('changeDirection', {direction: Math.round(direction), value: Math.round(distance)})
			}
		},
		moveStop(){
			this.yStart = window.innerHeight/2
			this.xStart = window.innerWidth/2
			this.yCircle = window.innerHeight/2
			this.xCircle = window.innerWidth/2
			
			this.$emit('changeDirection', {direction: 0, value: 0})
			this.active = false
		}
	}
}
</script>

<style lang="sass" scoped>
.joystick
	position: absolute
	width: 100%
	height: 100%

	.zone
		width: 150px
		height: 150px
		position: absolute
		top: 50vh
		left: 50vw
		border-radius: 100%
		transform: translate(-50%, -50%)
		background-color: #fff3
		pointer-events: none
	&.active .zone
		background-color: #fff5

	.circle
		width: 100px
		height: 100px
		position: absolute
		top: 50vh
		left: 50vw
		border-radius: 100%
		transform: translate(-50%, -50%)
		background-color: black
		pointer-events: none

</style>