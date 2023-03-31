<template>
	<div :class="$style.index">
		<div :class="$style.container"></div>
	</div>
</template>

<style lang="scss" module>
.index {
	width: 100%;
	height: 500px;
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {},
})
export default class RandomSongsView extends Vue {}
</script>
