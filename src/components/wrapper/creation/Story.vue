<template>
	<div class="block">
		<div class="block__title">Story</div>
		<div class="block__content">
			<Entry
				v-for="entry in this.entity.story"
				:entry="entry"
			/>
			<button class="entry add"><font-awesome-icon icon="fa-solid fa-plus" /></button>
		</div>
	</div>
</template>

<script>
import Entry from './story/Entry.vue';

export default {
	components:{Entry},
	data() {
		return {
			entity: {},
		};
	},
	methods: {
		setEntity(newEntity) {
			this.entity = newEntity;
			console.log(this.entity);
		}
	},
}
</script>

<style scoped lang="less">
	@import "/src/global.less";

	.block {
		&:not(:last-child) { margin-bottom: 1rem }
		
		&__title {
			font-weight: bold;
			margin: 0 0 .25rem .25rem;
		}

		&__content {
			flex-direction: column;
			padding: .5rem;
			background-color: fade(black, 20%);
			border-radius: 1.5rem;
			display: flex;
		}

		.entry.add {
			text-align: center;
			padding: .5rem;
			border-radius: 1rem;
			background-color: fade(@white, 10%);
			display: flex;
			justify-content: center;
			transition: .2s;
			color: @background-color-inverted;
			&:hover { background-color: fade(@white, 20%) }
		}
	}
</style>