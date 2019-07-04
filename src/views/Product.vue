<template>
  <div>
		<Nav></Nav>
		<!-- <keep-alive> -->
			<transition name="fade">
						<router-view></router-view>
			</transition>
		<!-- </keep-alive> -->
  </div>
</template>
<script>
import Nav from './Nav.vue';
export default {
	components: {
		Nav
	}
}
</script>
