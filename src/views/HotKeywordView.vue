<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<span :class="$style.text">인기 검색어</span>
			<div
				v-for="(item, index) in keywordList"
				:key="index"
				:class="$style.list"
			>
				<router-link :to="getLink(item)" :class="$style.rankItem">
					{{ index + 1 }}위 {{ item }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	margin: 20px 0px;
	.container {
		max-width: 1200px;
		margin: 0 auto;
		text-align: left;
		.text {
			padding: 10px;
			font-size: 20px;
			font-weight: bold;
			display: block;
		}
		.list {
			width: 50%;
			padding: 10px;
			font-size: 18px;
			display: block;
			border-top: 1px solid #000000;

			.rankItem {
				text-decoration: none;
				color: #000000;
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { getAPI } from "@/api/api";

@Component({
	components: {},
})
export default class HotKeywordView extends Vue {
	keywordList: string[] = [];
	mounted() {
		getAPI(this, "/popular/keyword").then(this.popularHandler).catch();
	}

	popularHandler(res: any) {
		for (let i = 0; i < res.data.array.length; i++) {
			this.keywordList.push(res.data.array[i].keyword);
		}
	}
	getLink(text: string): string {
		return "/search/" + text + "?nat_type=&str_type=";
	}
}
</script>
