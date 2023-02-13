<template>
	<div class="color-palette">
		<div class="color" v-for="color of colors" :key="color" @click="$emit('change', color)" :style="{backgroundColor: color}"></div>
	</div>
</template>

<script>
export default {
	props: ['colors']
}
</script>

<style lang="sass">
.color-palette
	display: flex
	flex-direction: row
	width: 100%
	.color
		width: 50px
		height: 50px
		flex: 1


</style>