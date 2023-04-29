<template>
  <div>
		<button @touchstart="startTimer" @touchend="stopTimer" @mousedown="startTimer" @mouseup="stopTimer" :class="{active}" data-press="Tout le monde est prêt ?">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
	data () {
		return {
			buttonText: 'Commencer',
			timer: null,
			active: false
    }
  },
	emits: ['click'],
  methods: {
    startTimer() {
      this.buttonText = ''
			this.active = true
      this.timer = setTimeout(() => {
				this.$emit('click')
      }, 5000)
    },
		stopTimer(){
			clearTimeout(this.timer)
			this.active = false
			this.buttonText = 'Commencer'
		}
  }
}
</script>

<style lang="sass" scoped>
button
	padding: 20px
	height: 70px
	border: 1px solid black
	border-radius: 10px
	background-color: transparent
	border: 2px solid #44ee44
	color: #00AA00
	font-family: "kanit"
	font-weight: 900
	font-size: 16px
	animation: glow 2000ms linear infinite
	margin: 20px
	width: 80%
	display: inline-block
	position: relative
	cursor: pointer
	overflow: hidden
	&::before
		white-space: nowrap
		position: absolute
		top: 0
		left: 0
		content: ''
		padding: 20px 0
		background: #55ff55
		width: 0%
		min-width: 0
		height: 100%
		transition: 0s ease-out width
		animation: glow 1000ms linear infinite

	&.active::before
		width: 100%
		transition: 4s
	&.active::after
		content: attr(data-press)
		position: absolute
		top: 20px
		text-align: center
		left: 0 
		right: 0

@keyframes glow
	0%
		filter: hue-rotate(0deg)
	100%
		filter: hue-rotate(360deg)
</style>