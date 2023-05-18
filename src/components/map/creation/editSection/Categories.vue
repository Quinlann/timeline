<template>
	<button class="info-bit btn add"><font-awesome-icon icon="fa-solid fa-plus" /></button>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
@import "/src/global.less";

.info-bit {
	background-color: fade(@white, 20%);
	border-radius: 1rem;
	display: inline-block;
	padding: 0 .5rem;
	height: 1.5rem;
	line-height: 1.5rem;
	overflow: hidden;
	transition: .2s;
	color: @background-color-inverted;
	&:not(:last-child) { margin-right: .25rem }
	&:not(.btn):hover { background-color: fade(@white, 30%); }
}

.btn {
	background-color: fade(@white, 5%);
	border-radius: 1rem;
	width: 1.5rem;
	padding: 0;
	&:hover { background-color: fade(@white, 20%) }
	&.add { text-align: center }
}
</style>