<template>
	<div :class="$style.index">
		<router-link :to="getLink()" :class="$style.container">
			<span :class="$style.number">{{ songInfo.number }}</span>
			<span :class="$style.title">{{ songInfo.title }}</span>
			<span :class="$style.singer">{{ songInfo.singer }}</span>
			<span :class="$style.writer">{{ songInfo.writer }}</span>
			<span :class="$style.maker">{{ songInfo.maker }}</span>
		</router-link>
	</div>
</template>


<style lang="scss" module>
.index {
	padding: 5px;
	padding-left: 10px;
	border-top: 1px solid #aaaaaa;
	.container {
		> span {
			margin-right: 20px;
			display: inline-block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #404040;
			text-decoration: none;
		}
		.number {
			width: 80px;
		}
		.title {
			width: calc((100% - 80px) / 2);
		}
		.singer {
			width: calc((100% - 80px) / 9);
		}
		.writer {
			width: calc((100% - 80px) / 9);
		}
		.maker {
			width: calc((100% - 80px) / 9);
		}
	}
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Song } from "@/structure/structure";

@Component
export default class SongComponent extends Vue {
	@Prop() songInfo?: Song;

	getLink(): string {
		return "/song/" + this.songInfo!.number;
	}
}
</script>
