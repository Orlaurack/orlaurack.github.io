

<template>
	<div class="game-join">
		<h1 class="title">Bienvenu dans le salon<span class="code">{{ code }}</span></h1>
		
		<h2 class="join text">Rejoignez la partie en allant sur</h2>
		<h3><span ref="link">{{ origin }}/{{ code }}</span> <span class="clipboard" @click="clipboard">📋</span></h3>
		<div class="players">
			<div  v-for="(player, name) in players" :key="name">
				<PlayerCard :player="player" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'code', 'players' ],
	data() {
		return {
			origin: ''
		} 
	},
	methods: {
		clipboard(){
			if(window.isSecureContext){
				navigator.clipboard.writeText(this.$refs.link.innerText)
			}
		}
	},
	mounted(){
		this.origin = window.location.origin
	}
}
</script>

<style lang="sass" scoped>
.game-join
	display: flex
	align-items: flex-start
	flex-direction: column
	margin: 0 auto
	height: 100vh
	width: max-content
	justify-content: center

	h1
		font-size: 48px
		text-align: center
		.code
			display: block
			font-size: 64px
			color: red
			animation: glow 8s linear infinite
	.clipboard
		cursor: pointer
		
	.players
		display: flex
		flex-direction: row
		justify-content: center

@keyframes glow
	0%
		filter: hue-rotate(0deg)
	100%
		filter: hue-rotate(360deg)
</style>