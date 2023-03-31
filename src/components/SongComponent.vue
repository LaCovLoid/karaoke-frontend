<template>
	<div :class="$style.index">
		<router-link v-if="checkIs" :to="getLink()" :class="$style.container">
			<span :class="[$style.number, $style.songText]">{{
				songInfo.number
			}}</span>
			<span :class="[$style.title, $style.songText]">{{
				songInfo.title
			}}</span>
			<span :class="[$style.singer, $style.songText]">{{
				songInfo.singer
			}}</span>
			<span :class="[$style.writer, $style.songText]">{{
				songInfo.writer
			}}</span>
			<span :class="[$style.maker, $style.songText]">{{
				songInfo.maker
			}}</span>
		</router-link>
	</div>
</template>


<style lang="scss" module>
.index {
	padding: 5px;
	border-top: 1px solid #aaaaaa;
	text-decoration: none;
	.container {
		.songText {
			margin-right: 20px;
			display: inline-block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #404040;
		}
		.number {
			width: 80px;
		}
		.title {
			width: 460px;
		}
		.singer {
			width: 150px;
		}
		.writer {
			width: 150px;
		}
		.maker {
			width: 150px;
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

	checkIs(): boolean {
		if (this.songInfo == null || this.songInfo.number) return false;
		return true;
	}
	getLink(): string {
		return "/song/" + this.songInfo!.number;
	}
}
</script>
