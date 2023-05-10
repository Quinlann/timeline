<template>
	<div class="block">
		<div class="block__header">
			<div class="block__title">Teams</div>
			<button class="removeBtn"><font-awesome-icon icon="fa-solid fa-minus" /></button>
		</div>
		<div class="block__content">
			<button class="info-bit">The Sith</button>
			<button class="info-bit">Ravenclaw</button>
			<button class="info-bit btn add"><font-awesome-icon icon="fa-solid fa-plus" /></button>
		</div>
	</div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
	@import "/src/global.less";

	.block {
		&:not(:last-child) { margin-bottom: 1rem }
		&:hover .removeBtn { opacity: 1 }
		
		&__header {
			display: flex;
			justify-content: space-between;
			.removeBtn { opacity: 0 }
		}

		&__title {
			font-weight: bold;
			margin: 0 0 .25rem .25rem;
		}

		&__content {
			padding: .5rem;
			background-color: fade(black, 20%);
			border-radius: 1.5rem;
			display: flex;
		}
		
		&__add {
			border-top: 1px solid @black;
			padding-top: 1rem;
		}

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

		.img {
			height: 5rem;
			width: 4rem;
			&.add { line-height: 5rem }
		}

		input {
			width: 100%;
			border: none;
			padding: .25rem;
			background-color: transparent;
			color: @background-color-inverted;
			white-space:wrap;
		}

		.block-bit {
			float: left;
			padding: .5rem;
			background-color: fade(@white, 10%);
			border-radius: 1rem;
			margin: 0 .5rem .5rem 0;
			transition: .2s;
			color: @background-color-inverted;
			&:hover { background-color: fade(@white, 20%); }
			.icon { display: inline-block }
		}
	}
</style>