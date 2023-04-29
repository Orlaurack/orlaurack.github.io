<template>
	<div class="joystick" 
		@mousedown="moveStart($event.clientX, $event.clientY)"
		@touchstart="moveStart($event.touches[0].clientX, $event.touches[0].clientY)"
		@mousemove="move($event.clientX, $event.clientY)"
		@touchmove="move($event.touches[0].clientX, $event.touches[0].clientY)"
		@mouseup="moveStop"
		@touchend="moveStop"
		@touchcancel="moveStop"
		:class="active"
	>
		<div class="zone" :class="{active}" :style="{top: yStart+'px', left: xStart+'px'}">
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
			active: false,
			log: null
		}
	},
	methods:{

		moveStart(x, y){
			this.yStart = y
			this.xStart = x
			this.yCircle = y
			this.xCircle = x
			this.active = true
		},
		move(eventX, eventY){
			if(this.active){
				
				const y = this.yStart - eventY
				const x = this.xStart - eventX

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
		width: 125px
		height: 125px
		outline: 50px solid #fff3
		position: absolute
		top: 50vh
		left: 50vw
		border-radius: 100%
		transform: translate(-50%, -50%)
		background-color: #fff6
		pointer-events: none
		transition: left 100ms, top 100ms
		&.active
			outline-color: #fff2
			background-color: #fff4

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
		transition: left 50ms, top 50ms

	pre
		position: absolute

</style>