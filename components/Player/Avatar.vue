<template>
	
	<div v-if="avatar" class="avatar" :class="{small, active}">
		<svg  class="body" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class="body-color" d="M230.458 174.502C236.56 243.235 169.992 289.788 107.958 278.502C56.1071 269.069 27.7583 233.085 20.958 174.502C13.1587 107.314 53.3986 19.5161 126.458 20.002C199.189 20.4857 224.915 112.063 230.458 174.502Z" :fill="avatar.body.color"/>
			<path d="M60.9252 84.8534C53.3546 96.5607 59.4095 110.106 49.3354 112.805C23.1814 119.813 70.1749 36.3051 86.9772 54.579C97.5344 66.0609 74.6916 63.565 60.9252 84.8534Z M40.3818 130.632C50.8479 125.145 53.4126 140.359 49.4696 146.185C45.6715 151.797 32.6205 155.926 32.1692 144.857C31.9079 138.448 34.7007 133.611 40.3818 130.632Z" fill="white" fill-opacity="0.5"/>
			<path d="M73.0811 200.899C69.9865 197 64.6761 195.624 60.0898 197.558C59.6976 197.723 59.3303 197.873 59.0006 198C0.0994339 220.693 117.385 287.616 101 262C83.2085 234.185 89.1278 237.62 101 246C118 258 147.124 257.643 158 249C176.134 234.589 179.432 242.622 161 260C141.664 278.231 252.816 244.407 215.5 133.5C208.581 112.935 198.76 105.832 186.958 106.992C180.978 107.58 178.818 114.574 181.348 120.024C194.66 148.702 195.417 180.999 175.92 202.987C149.7 232.559 101.548 232.116 74.839 202.987C74.3057 202.406 73.7028 201.682 73.0811 200.899Z" fill="black" fill-opacity="0.25"/>
			<path d="M90.1604 98.6882C107.16 80.1881 141.66 80.6881 157.66 98.6882C183.148 127.361 192.827 170.116 169.66 196.188C146.833 221.878 104.913 221.493 81.6599 196.188C58.1674 170.622 64.3 126.831 90.1604 98.6882Z" fill="white" stroke="white" opacity="0.25"/>
		</svg>
		<Eye :color="avatar.eye.color" :name="avatar.eye.model" :small="small" />
	</div>
	<div v-else class="avatar" :class="{small: small}">

	</div>

</template>

<script>
export default {
  props: {
    avatar: Object,
		small: Boolean,
		active: Boolean
  },
	mounted(){
	}
}
</script>

<style lang="sass">

.avatar
	height: 300px
	width: 250px
	overflow: hidden
	.body
		width: 100%
		height: 100%
		.body-color
			transition: fill 500ms
	&.small
		width: 100px
		height: 120px
	&.active
		animation: glow 1000ms infinite ease-in-out
		border-radius: 100%
		
   
@keyframes glow 
	0%
		box-shadow: 0 0 50px 2px var(--turn-color),inset 0 0 50px transparent
		outline: var(--turn-color) 2px solid
	50%
		box-shadow: 0 0 50px 2px transparent, inset 0 0 50px var(--turn-color)
		outline: var(--turn-color) 2px solid
	100%
		box-shadow: 0 0 50px 2px var(--turn-color),inset 0 0 50px transparent
		outline: var(--turn-color) 2px solid
</style>