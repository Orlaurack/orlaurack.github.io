<template>
  <div>
		<button @touchstart="startTimer" @touchend="stopTimer" @mousedown="startTimer" @mouseup="stopTimer" :class="{active}">{{ buttonText }}</button>
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
      this.buttonText = 'Prêt ?'
			this.active = true
      this.timer = setTimeout(() => {
				this.$emit('click')
      }, 3000)
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
	border: 1px solid black
	border-radius: 10px
	background: #00000000
	margin: 20px
	width: 80%
	display: inline-block
	position: relative
	cursor: pointer
	overflow: hidden
	&::after
		white-space: nowrap
		position: absolute
		top: 0
		left: 0
		content: ''
		padding: 20px 0
		background: #55ff55ff
		width: 0%
		min-width: 0
		height: 100%
		transition: 0s ease-out width
	&.active::after
		width: 100%
		transition: 3s

</style>