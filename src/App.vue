<template>
	<div id="app">
		<div class="appContainer">
			<div :class="getMenuClassLeft()">
				<Menu />
			</div>
			<div :class="getMenuClassRight()">
				<Header />
				<router-view />
				<Footer />
			</div>
		</div>
	</div>
</template>


<style lang="scss">
@import url("//fonts.googleapis.com/earlyaccess/notosanskr.css");

* {
	box-sizing: border-box;
}
body {
	margin: 0;
	overflow: hidden;
	font-family: "Noto Sans KR", sans-serif;
}
#app {
	margin: 0;
	padding: 0;
	border: 0;
	text-align: center;

	#topContainer {
		padding-top: 64px;
	}

	.appContainer {
		position: relative;

		> .appLeft {
			width: 200px;
			height: 100vh;

			position: absolute;
		}
		> .appRight {
			height: 100vh;

			overflow: auto;
		}

		> .leftInactive {
			opacity: 0;
			transform: translateX(-200px);
			transition: all 0.5s ease;
		}
		> .leftActive {
			opacity: 1;
			transform: translateX(0px);
			transition: all 0.5s ease;
		}

		> .rightInactive {
			margin-left: 0px;
			transition: all 0.5s ease;
		}
		> .rightActive {
			margin-left: 200px;
			transition: all 0.5s ease;
		}
	}
}
</style>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

@Component({
	components: {
		Header,
		Footer,
		Menu,
	},
})
export default class App extends Vue {
	mounted() {}
	menusListcheck(): boolean {
		return this.$store.state.menusListState;
	}

	getMenuClassLeft(): string {
		if (this.$store.state.menusListState) {
			return "appLeft leftActive";
		}
		return "appLeft leftInactive";
	}
	getMenuClassRight(): string {
		if (this.$store.state.menusListState) {
			return "appRight rightActive";
		}
		return "appRight rightInactive";
	}
}
</script>
