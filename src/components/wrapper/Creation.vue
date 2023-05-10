<template>
    
    <div class="creation entityCreator">
		<div class="creation__header">
			<div class="top">
				<button class="icon"><font-awesome-icon icon="fa-solid fa-user" /></button>
				<button class="name">{{ entity.name }}</button>
				<button class="closeBtn"
					@click="closePop"
				><font-awesome-icon icon="fa-solid fa-xmark" /></button>
			</div>
			<div class="bottom">
				<div class="path">World 1</div>
			</div>
		</div>
		<div class="creation__info">
			<Block />
			<div class="block">
				<div class="block__add">
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Nicknames
					</button>
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Description
					</button>
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Images
					</button>
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Skills
					</button>
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Teams
					</button>
					<button class="block-bit">
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Categories
					</button>
				</div>
			</div>
		</div>

		<div class="creation__story">
			<Story
				ref="story"
				@openEntryCreator="(entry) => {showEntryCreatorEntry = entry; showEntryCreator = true;}"
			/>
		</div>

		<div class="creation__footer">
			<button class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></button>
			<button class="acceptBtn"><font-awesome-icon icon="fa-solid fa-check" /></button>
		</div>
	</div>
	
	<EntryCreator
		v-if="showEntryCreator"
		@closeEntryCreator="showEntryCreator = false;"
		@saveEntryCreator="saveEntryLocation"
		:entry="showEntryCreatorEntry"
		:locations="locations"
	></EntryCreator>

</template>

<script>
import Story from './creation/Story.vue';
import EntryCreator from './creation/EntryCreator.vue'
import Block from './creation/EntryCreator.vue'

export default {
	components: {
		Story,
		EntryCreator,
		Block,
	},
	props: [
		'closePop',
		'locations',
	],
	data() {
		return {
			entity: {},
			showEntryCreator: false,
			showEntryCreatorEntry: {},
		}
	},
	methods: {
		setEntity(newEntity) {
			this.entity = newEntity;
			this.$refs.story.setEntity(newEntity);
		},
		saveEntryLocation(entryId, newLocation) {
			this.showEntryCreator = false;
			this.$parent.$parent.addNewLocationToEntry(this.entity.id, entryId, newLocation);
		}
	},
}
</script>

<style scoped lang="less">

@import "/src/global.less";

@timelineColWidth: 18rem;
@padding: .5rem;
@margin: .5rem;

.creation {
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	border-radius: .5rem;
	padding: 1rem;
	z-index: 1;

	&.entityCreator {
		.creation__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid fade(black, 50%);
		padding-bottom: .5rem;
		margin-bottom: 1rem;
		
		
		.icon, .name {
			padding: .25rem;
			border-radius: .25rem;
			font-size: 1.5rem;
			float: left;
			transition: .2s;
			color: @background-color-inverted;
			&:hover { background-color: fade(@white, 10%) }
		}

		.icon {
			margin-right: .5rem;
			width: 2.5rem;
			text-align: center;
		}
		
		.name {
			font-weight: bold;
		}

		.closeBtn {
			float: right;
			opacity: .5;
			color: @background-color-inverted;
			&:hover { opacity: 1; }
		}

		.path {
			font-size: .8rem;
		}
	}

	&__info {
		float: left;
		width: ~"calc(100% - (@{timelineColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__story {
		float: left;
		width: @timelineColWidth;
	}

	&__footer {
		width: 100%;
		clear: both;
		padding-top: 1rem;
		display: flex;
		justify-content: space-between;

		.deleteBtn, .acceptBtn {
			width: 2.5rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			border-radius: 50%;
		}

		.deleteBtn {
			background-color: fade(@red, 20%);
			&:hover { background-color: fade(@red, 30%) }
		}

		.acceptBtn {
			background-color: fade(@green, 20%);
			&:hover { background-color: fade(@green, 30%) }
		}
	}

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
}

.deleteBtn, .removeBtn, .acceptBtn {
	padding: 0 .5rem;
	color: fade(@white, 50%);
	transition: .2s;
}

.removeBtn:hover  { color: fade(@white, 80%) }
.deleteBtn:hover { color: fade(@red, 80%) }
.acceptBtn:hover { color: fade(@green, 80%) }
</style>