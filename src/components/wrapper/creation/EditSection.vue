<template>
	<div class="block">
		<div class="block__header">
			<div class="block__title">{{ title }}</div>
			<button 
				class="removeBtn"
				@click="hideEditSection"
			><font-awesome-icon icon="fa-solid fa-trash" /></button>
		</div>
		<div class="block__content">
			<Nicknames
				v-if="title === 'Nickname'"
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

<script>
import Categories from './editSection/Categories.vue';
import Description from './editSection/Description.vue';
import Images from './editSection/Images.vue';
import Nicknames from './editSection/Nicknames.vue';
import Skills from './editSection/Skills.vue';
import Teams from './editSection/Teams.vue';

export default {
	components: {
		Categories,
		Description,
		Images,
		Nicknames,
		Skills,
		Teams,
	},
	props: {
		title: {
			type: String,
			default: () => {
				return '';
			}
		}
	},
	methods: {
		hideEditSection(){
			console.log(this.title);
			this.$parent.hideEditSection(this.title);
		}
	}
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