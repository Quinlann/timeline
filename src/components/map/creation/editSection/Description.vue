<template>
	<input type="textarea">
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
	@import "/src/global.less";
		input {
			width: 100%;
			border: none;
			padding: .25rem;
			background-color: transparent;
			color: @background-color-inverted;
			white-space:wrap;
		}
</style>