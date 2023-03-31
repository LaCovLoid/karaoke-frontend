<template>
	<div :class="$style.index">
		<div :class="$style.searchBar">
			<select v-model="searchNationType" :class="$style.nationSelect">
				<option
					v-for="(item, index) in searchNationList"
					:key="index"
					:value="item.value"
				>
					{{ item.name }}
				</option>
			</select>

			<select v-model="searchStringType" :class="$style.stringSelect">
				<option
					v-for="(item, index) in searchStringList"
					:key="index"
					:value="item.value"
				>
					{{ item.name }}
				</option>
			</select>

			<input
				type="text"
				:class="$style.searchInput"
				:placeholder="searchbarText"
				@keyup.enter="enterHandler(keyword)"
				v-model="keyword"
			/>
			<span :class="$style.searchButton" @click="enterHandler(keyword)"
				>검색</span
			>
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	padding: 20px;
	margin-bottom: 20px;

	text-align: left;
	background-color: #eaeaea;
	border-radius: 50px;

	.searchBar {
		margin-left: 20px;

		> select,
		> input,
		> .searchButton {
			height: 32px;
			vertical-align: middle;
		}

		> .nationSelect {
			margin-right: 5px;
			font-size: 16px;
		}
		.stringSelect {
			margin-right: 5px;
			font-size: 16px;
		}
		.searchInput {
			// height: 28px;
		}
		.searchButton {
			margin-left: 20px;
			padding: 2px 5px;

			display: inline-block;
			border: 1px solid black;
			border-radius: 5px;
			// transform: translateY(2px);
		}
	}
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Goods extends Vue {
	keyword: string = "";
	searchbarText: string = "노래 검색";
	// str_type?: string;
	// nat_type?: string;

	searchNationType: string = "";
	searchNationList = [
		{ name: "나라 전체", value: "" },
		{ name: "한국", value: "kor" },
		{ name: "팝송", value: "eng" },
		{ name: "일본", value: "jpn" },
		{ name: "중국", value: "chn" },
		{ name: "필리핀", value: "phl" },
		{ name: "인도네시아", value: "ins" },
	];
	searchStringType: string = "";
	searchStringList = [
		{ name: "전체", value: "" },
		{ name: "제목", value: "title" },
		{ name: "가수", value: "singer" },
		{ name: "작사가", value: "writer" },
		{ name: "작곡가", value: "maker" },
		{ name: "번호", value: "number" },
		{ name: "가사", value: "lyrics" },
	];

	mounted() {
		this.init();
	}

	init() {
		let text = this.$route.params.keyword;
		this.keyword = text;
	}

	enterHandler(keyword: string) {
		this.keyword = keyword;

		if (this.keyword.trim() != "") {
			this.$router.push({
				name: "search",
				params: {
					keyword: this.keyword,
				},
				query: {
					nat_type: this.$data.searchNationType,
					str_type: this.$data.searchStringType,
				},
			});
		}
	}
}
</script>
