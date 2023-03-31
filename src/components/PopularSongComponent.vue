<template>
	<div :class="$style.index" v-once>
		<router-link :to="getLink" :class="$style.container">
			<span :class="$style.rank">{{ songInfo.rank }}</span>
			<span :class="$style.number">{{ songInfo.number }}</span>
			<span :class="$style.title">{{ songInfo.title }}</span>
			<span :class="$style.singer">{{ songInfo.singer }}</span>
		</router-link>
	</div>
</template>


<style lang="scss" module>
.index {
	padding: 5px;
	padding-left: 10px;
	border-top: 1px solid #aaaaaa;

	.container {
		display: flex;
		text-decoration: none;

		> span {
			margin-right: 20px;
			display: block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #404040;
		}

		.rank {
			width: 50px;
		}

		.number {
			width: 80px;
		}

		.title {
			width: calc((100% - 50px - 80px) / 2);
		}

		.singer {
			width: calc((100% - 50px - 80px) / 2);
		}
	}
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Song } from "@/structure/structure";

@Component
export default class PopularSongComponent extends Vue {
	@Prop() songInfo?: Song;

	get getLink(): string {
		return "/song/" + (this.songInfo?.number ?? 0).toString();
	}
}
</script>
