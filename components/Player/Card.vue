<template>
	<div class="player-card">
		<PlayerAvatar :avatar="player.avatar" small />
		<h2>{{ player.name }}</h2>

	</div>
</template>

<script>
export default {
	props: {
    player: Object
  },
}
</script>

<style lang="sass">
.player-card
	display: flex
	flex-direction: column
	align-items: center
	width: 150px
	border: solid black 2px
	border-radius: 10px
	margin: 20px
	padding-top:20px
</style>