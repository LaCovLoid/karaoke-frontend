<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<span :class="$style.text">신곡</span>
			<SongComponent
				v-for="(item, index) in songs"
				:key="index"
				:songInfo="item"
			/>
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
	}
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { Song } from "@/structure/structure";
import SongComponent from "@/components/SongComponent.vue";
import { getAPI } from "@/api/api";

@Component({
	components: { SongComponent },
})
export default class NewSongsView extends Vue {
	songs: Song[] = [];

	mounted() {
		getAPI(this, "/new").then(this.newHandler).catch();
	}

	newHandler(res: any) {
		for (let i = 0; i < res.data.array.length; i++) {
			this.songs.push(res.data.array[i] as Song);
		}
	}
}
</script>
