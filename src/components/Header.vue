<template>
	<div :class="$style.index">
		<div :class="$style.indexContainer">
			<img
				src="@/assets/image/burger.png"
				:class="$style.menuIcon"
				@click="menusListStateHandler()"
			/>

			<router-link :class="$style.logo" to="/">L a C o v</router-link>
		</div>
	</div>
</template>


<style lang="scss" module>
.index {
	height: 60px;
	width: 100%;
	padding: 12px 20px;

	z-index: 3;
	background-color: rgb(225, 225, 225);
	.indexContainer {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;

		.menuIcon {
			width: 36px;
			height: 36px;
			margin-right: 30px;

			border-radius: 5px;
		}

		.logo {
			padding: 5px 20px;

			color: black;
			text-decoration: none;
			font-weight: bold;

			border-radius: 5px;
		}
	}
}
</style>

<style lang="scss">
.tj,
.kumyong {
	margin-right: 20px;
	padding: 6px 15px;

	color: rgb(0, 0, 0);
	border-radius: 10px;
	display: inline-block;
	background-color: white;
}
.companySelected {
	background-color: rgb(203, 203, 203);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {},
})
export default class Header extends Vue {
	menusListState: boolean = this.$store.state.menusListState;

	mounted() {}
	menusListStateHandler() {
		this.menusListState = !this.$store.state.menusListState;
		this.$store.commit("setMenusListState", this.menusListState);
	}
}
</script>
