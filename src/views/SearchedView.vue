<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<SearchBar />
			<div
				:class="$style.itemList"
				v-for="(listItem, listIndex) in songs"
				:key="listIndex"
			>
				<hr />
				<span :class="$style.className">{{
					getClassName(listIndex)
				}}</span>
				<div v-if="checkIs(listIndex)">
					<SongComponent
						v-for="(componentItem, componentIndex) in listItem"
						:key="componentIndex"
						:songInfo="componentItem"
					/>
				</div>
				<div v-else>검색 결과가 없습니다.</div>
				<br />
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	padding: 30px;

	.container {
		max-width: 1200px;
		margin: 0 auto;

		.itemList {
			text-align: left;

			.className {
				margin: 5px;
				margin-bottom: 10px;
				display: block;
				font-size: 20px;
				font-weight: bold;
				color: #373737;
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue";
import SongComponent from "@/components/SongComponent.vue";
import axios from "axios";
import { Song } from "@/structure/structure";
import { getAPI } from "@/api/api";

@Component({
	components: { SearchBar, SongComponent },
})
export default class SearchedView extends Vue {
	keyword: string = "";
	str_type: string = "";
	nat_type: string = "";
	songs: Song[] = [];
	isValue: boolean = false;
	classList: string[] = [
		"곡  명",
		"가  수",
		"작 사 가",
		"작 곡 가",
		"번  호",
	];

	mounted() {
		this.init();
	}
	init() {
		this.keyword = this.$route.params.keyword;
		this.str_type = String(this.$route.query.str_type);
		this.nat_type = String(this.$route.query.nat_type);

		if (this.keyword == null || this.keyword == "") {
			this.$router.push("/");
		}
		if (this.str_type == "") {
			this.str_type = "all";
		}
		if (this.nat_type == "") {
			this.nat_type = "all";
		}

		getAPI(this, "/search/" + this.keyword, {
			str_type: this.str_type,
			nat_type: this.nat_type,
		})
			.then(this.searchHandler)
			.catch();
		//error 뭔가 하기
	}

	searchHandler(res: any) {
		for (let i = 0; i < res.data.array.length; i++) {
			this.songs.push(res.data.array[i] as Song);
		}
	}

	checkIs(listIndex: number) {
		if ((<any>this.songs[listIndex]).length == 0) return false;
		return true;
	}

	getClassName(listIndex: number): string {
		if ((<any>this.songs).length == 1) {
			return "검색 결과";
		}

		return this.classList[listIndex];
	}

	getLink(listIndex: number, componentIndex: number): string {
		return "/song/" + (<any>this.songs)[listIndex][componentIndex];
	}

	// @Watch("$route.path") 이거까지 하니 두번실행됨
	@Watch("$route.query")
	refresh() {
		this.songs = [];
		this.init();
	}
}
</script>
