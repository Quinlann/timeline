<template>
	<div class="editSection">
		<div class="editSection__header">
			<div class="editSection__title">{{ title }}</div>
			<button 
				class="removeBtn"
				@click="hideEditSection"
			><font-awesome-icon icon="fa-solid fa-trash" /></button>
		</div>
		<div class="editSection__content">
			<Nicknames
				v-if="title === 'Nicknames'"
			/>
			<Description
				v-if="title === 'Description'"
			/>
			<Images
				v-if="title === 'Images'"
			/>
			<Skills
				v-if="title === 'Skills'"
			/>
			<Teams
				v-if="title === 'Teams'"
			/>
			<Categories
				v-if="title === 'Categories'"
			/>
		</div>
	</div>
</template>

<script setup>
import Nicknames from './editSection/Nicknames.vue';
import Description from './editSection/Description.vue';
import Images from './editSection/Images.vue';
import Skills from './editSection/Skills.vue';
import Teams from './editSection/Teams.vue';
import Categories from './editSection/Categories.vue';

const props = defineProps(['title',]);
const emit = defineEmits(['hideEditSection']);

const hideEditSection = () => {
	emit('hideEditSection', props.title);
}
</script>

<style scoped lang="less">
@import "/src/global.less";

.editSection {
	max-height: 20rem;
	animation: editSectionReveal .5s;

	&:not(:last-child) { margin-bottom: 1rem }
	&:hover .removeBtn { opacity: 1 }
	
	&__header {
		display: flex;
		justify-content: space-between;
		
		.removeBtn {
			opacity: 0;
			padding: 0 .5rem;
			color: fade(@white, 50%);
			transition: .2s;
			&:hover  { color: fade(@white, 80%) }
		}
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
}

@keyframes editSectionReveal {
	from {
		max-height: 0;
		opacity: 0;
	}
}
</style>