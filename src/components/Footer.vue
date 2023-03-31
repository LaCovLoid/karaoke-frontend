<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<span :class="$style.text">
				Maked by LaCov<br />
				and it's a test text
			</span>
		</div>
	</div>
</template>

<style scoped lang="scss" module>
.index {
	width: 100%;
	padding: 20px;

	text-align: left;
	background-color: rgb(225, 225, 225);

	.container {
		max-width: 1200px;
		margin: 0 auto;
		.text {
			font-size: 12px;
		}
	}
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Goods extends Vue {}
</script>
