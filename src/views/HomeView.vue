<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<SearchBar />

			일본어 검색 기능 추가 후 이쪽에 검색관련 팁 및 주의 사항을 적을 예정
		</div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	height: 500px;
	padding: 30px;

	text-align: left;
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue";

@Component({
	components: { SearchBar },
})
export default class HomeView extends Vue {}
</script>
