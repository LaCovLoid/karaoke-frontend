<template>
	<div :class="$style.index">
		<SearchBar />
		<div :class="$style.container" v-if="isAxios">
			곡명 : {{ info.title }} <br />
			가수 : {{ info.singer }} <br />
			번호 : {{ info.number }}<br />
			<br />
			가사<br />
			<span :class="$style.lyrics" v-html="lyrics"></span>
			<span :class="$style.video"
				><iframe
					v-if="isYoutube"
					width="560"
					height="315"
					:src="getYoutubeLink()"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe
			></span>
		</div>
		<div v-else>Now Loading...</div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	padding: 30px;
	.container {
		max-width: 1200px;
		margin: 0 auto;
		text-align: left;
		.lyrics {
			width: 50%;
			line-height: 30px;

			display: inline-block;
		}
		.video {
			width: 50%;
			display: inline-block;
			vertical-align: top;
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue";
import axios from "axios";
import { Song } from "@/structure/structure";
import { getAPI } from "@/api/api";

@Component({
	components: { SearchBar },
})
export default class SongView extends Vue {
	songId?: number;
	info?: Song;
	isAxios: boolean = false;
	lyrics: string = "";
	youtubeId: string = "";
	isYoutube: boolean = false;

	mounted() {
		this.songId = Number(this.$route.params.id);
		getAPI(this, "/song/" + this.songId)
			.then(this.detailHandler)
			.catch(this.detailErrorHandler);
	}

	detailHandler(res: any) {
		this.info = res.data.array;
		if (this.info) {
			this.isAxios = true;
		} else return;

		getAPI(this, "/lyrics/" + this.info.title + " " + this.info.singer)
			.then(this.lyricsHandler)
			.catch(this.lyricsErrorHandler);

		getAPI(this, "/youtube/" + this.info.title + " " + this.info.singer)
			.then(this.youtubeHandler)
			.catch();
	}
	lyricsHandler(res: any) {
		this.lyrics = res.data.lyrics;
	}
	youtubeHandler(res: any) {
		this.youtubeId = res.data.youtubeId;
		this.isYoutube = true;
	}
	lyricsErrorHandler() {
		this.lyrics = "가사가 없습니다.";
	}

	getYoutubeLink(): string {
		// "https://www.youtube.com/embed/6Sz0ym4LMY0"
		return "https://www.youtube.com/embed/" + this.youtubeId;
	}

	detailErrorHandler() {
		getAPI(this, "/number/" + this.songId)
			.then(this.detailHandler)
			.catch(this.isNotSongHandler);
	}

	isNotSongHandler() {
		alert("곡이 없습니다");
		this.$router.push("/");
	}
}
</script>
