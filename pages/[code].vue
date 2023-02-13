<script>
export default {
	props: ['code'],
	mounted(){
		const router = useRouter()
		const route = useRoute()

		router.push(`controller/room-${route.params.code.toString().toUpperCase()}/join`)
	}
}
</script>