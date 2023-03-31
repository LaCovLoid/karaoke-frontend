<template>
	<div :class="$style.index" class="menuIndex">
		<span :class="$style.title">M E N U</span>
		<div v-for="(item, index) in menusItem" :key="index">
			<router-link
				v-if="menusItem[index].opened == undefined"
				:to="menusItem[index].path"
				:class="$style.menus"
				>{{ menusItem[index].name }}
			</router-link>

			<div v-else>
				<div :class="$style.menus" @click="menuStateHandler(index)">
					{{ menusItem[index].name }}
				</div>
				<div
					v-for="(subItem, subIndex) in menusItem[index].subMenu"
					:key="subIndex"
				>
					<router-link
						v-if="menusItem[index].opened == true"
						:to="menusItem[index].subMenu[subIndex].path"
						:class="[$style.menus, $style.subMenus]"
					>
						{{ menusItem[index].subMenu[subIndex].name }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" module>
.index {
	font-family: "Noto Sans KR", sans-serif;
	height: 100%;
	padding-top: 30px;

	z-index: 3;
	background-color: #ffffff;

	overflow: auto;

	.title {
		text-align: left;
		margin: 20px 20px;
		margin-bottom: 10px;

		font-size: 26px;
		font-weight: bold;

		display: block;
	}

	.menus {
		text-align: left;

		padding: 10px 20px;

		color: black;
		font-size: 20px;
		font-weight: 300;
		text-decoration: none;

		display: block;
	}
	.menus:hover {
		background-color: #c5c5c5;
		transition: 0.6s;
	}
	.subMenus {
		padding-left: 40px;
		font-size: 16px;
	}

	.menusExtended .menus {
		background: rgb(255, 219, 219);
		margin-left: 50px;
		margin-right: 40px;
		padding: 5px;
	}
}
</style>

<style lang="scss">
.menuIndex > .router-link-exact-active {
	background: rgb(255, 118, 118);
}
.menuIndex > .menusExtended > .router-link-exact-active {
	background: rgb(255, 118, 118);
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { MenuInfo } from "@/structure/structure";

@Component
export default class Menu extends Vue {
	menusListState?: boolean;
	menusItem: MenuInfo[] = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "이달의 신곡",
			path: "/new_songs",
		},
		{
			name: "인기 차트",
			path: "/hot_songs",
		},
		{
			name: "인기 검색어",
			path: "/hot_keyword",
		},
		// {
		// 	name: "랜덤 곡 선택",
		// 	path: "/random",
		// },
		// {
		// 	name: "메뉴 더보기",
		// 	opened: false,
		// 	subMenu: [
		// 		{
		// 			name: "미니메뉴1",
		// 			path: "mini1",
		// 		},
		// 		{
		// 			name: "미니메뉴2",
		// 			path: "mini2",
		// 		},
		// 	],
		// },
	];

	menuState: boolean[] = [false, false];

	menuStateHandler(index: number) {
		// this.menusItem[index].opened = !this.menusItem[index].opened;
		this.$set(
			this.menusItem[index],
			"opened",
			!this.menusItem[index].opened
		);
		// this.$forceUpdate();
	}
}
</script>
