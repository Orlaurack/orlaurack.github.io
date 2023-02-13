

<template>
	<div>
		<div class="map" ref="map">
			<div class="player" v-for="(player, name) in players" :key="name" :style="{left: playersPositions[name]?.x + 'px', top: playersPositions[name]?.y + 'px'}">
				<PlayerAvatar :avatar="player.avatar" small />
			</div>
			<div class="games">
				<div v-for="(number, game) in games" :key="game" ref="games" class="game" :data-name="game">{{game}} <span class="number">{{ number }}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref as firestoreRef, set } from "firebase/database"
export default {
  props: ["code", "players"],
	data (){
		return{
			playersPositions: {},
			games: {sign: 0, anus: 0}
		}
	},
	methods:{
		getCoordinates(number) {
	    const coordinates = []
	    var angle = 0
	    var step = 360 / number
	    for (var i = 0; i < number; i++) {
        coordinates.push({
          x: (window.innerWidth/2) + Math.cos(angle * Math.PI / 180)*100,
          y: (window.innerHeight/2) + Math.sin(angle * Math.PI / 180)*100
        })
        angle += step
	    }
	    return coordinates
		},
		insideRectangle(position, rectangle){
			return (position.x >= rectangle.left && position.x <= rectangle.right && position.y >= rectangle.top && position.y <= rectangle.bottom)
		},
		refreshPosition(){
			for(const [key, player] of Object.entries(this.players)){
				const joystick = player.controller?.joystick
				if(joystick?.value)
				{
					const new_pos = {x: this.playersPositions[key].x +joystick.value * -Math.cos(joystick.direction * Math.PI / 180) / 20, y: this.playersPositions[key].y +joystick.value * -Math.sin(joystick.direction * Math.PI / 180) / 20}
					
					if(this.$refs.map && this.insideRectangle(new_pos, this.$refs.map.getBoundingClientRect())){

						for(const game of this.$refs.games){
							const rectangle = game.getBoundingClientRect()
							const beforeInside = this.insideRectangle({x: this.playersPositions[key].x, y: this.playersPositions[key].y}, rectangle)
							const afterInside = this.insideRectangle(new_pos, rectangle)
							
							if(beforeInside && !afterInside){
								this.games[game.dataset.name] --
							}else if(!beforeInside && afterInside){
								this.games[game.dataset.name] ++
								if(this.games[game.dataset.name] == Object.keys(this.players).length){
									this.start_the_game(game.dataset.name)
								}
							}
						}
						
						this.playersPositions[key].x = new_pos.x
						this.playersPositions[key].y = new_pos.y
					}
				}
			}
		},
		start_the_game(game_name){
			const rtdb = useRTDB() 
			const route = useRoute()
			
			set(firestoreRef(rtdb, `rooms/${this.code}/state`), 'play_'+game_name)
		}
	},

	mounted(){
		const positions = this.getCoordinates(Object.keys(this.players).length)
		
		for(const [key, player] of Object.entries(this.players)){
			this.playersPositions[key] = positions.pop()

		}

		setInterval(() => {
			this.refreshPosition()
		}, 1000/60);

		
		const rtdb = useRTDB() 
		const route = useRoute()
		set(firestoreRef(rtdb, `rooms/${route.params.code}/controller/type`), 'joystick')
		
		set(firestoreRef(rtdb, `rooms/${this.code}/game`), {})
	}
}
</script>

<style lang="sass" scoped>
.map
	display: flex
	flex-direction: row
	position: absolute
	margin: 5%
	width: 90%
	height: 90%
	.player
		position: absolute
		transform: translate(-50%, -50%)
	.games
		position: absolute
		width: 100%
		height: 100%
		display: flex
		flex-direction: row
		justify-content: center
		// align-items: center
		flex-wrap: wrap
		.game
			border: 1px solid #000
			width: 200px
			height: 140px
			margin: 20px
			border-radius: 30%
			font-size: 50px
			text-align: center
			padding: 30px 0
			.number
				display: block
				width: 100%
				padding-top: 20px
			
.title
	text-align: center
		
</style>