<template>
	<div class="loader-container">
		<div class="loader"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.loader-container
	position: absolute
	width: 100%
	height: 100%
	display: flex
	align-items: center
	justify-content: center
	.loader
		border: 20px solid #fff8
		border-right-color: transparent
		animation: spin 300ms linear infinite 
		width: 200px
		height: 200px
		border-radius: 100%

@keyframes spin
	0%
		transform: rotate(0deg)
	100%
		transform: rotate(360deg)
</style>