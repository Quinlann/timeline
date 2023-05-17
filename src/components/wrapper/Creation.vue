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
			
			<EditSection 
				v-if="showingNickname"
				:title="'Nickname'" 
			/>
			<EditSection
				v-if="showingDescription"
				:title="'Description'"
			/>
			<EditSection
				v-if="showingImages"
				:title="'Images'"
			/>
			<EditSection
				v-if="showingSkills"
				:title="'Skills'"
			/>
			<EditSection
				v-if="showingTeams"
				:title="'Teams'"
			/>
			<EditSection
				v-if="showingCategories"
				:title="'Categories'"
			/>
			
			<div class="block">
				<div class="block__add">
					<button
						class="block-bit"
						v-if="!showingNickname"
						@click="showingNickname = true;"
					>
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Nicknames
					</button>
					<button 
						class="block-bit"
						v-if="!showingDescription"
						@click="showingDescription = true;"
					>
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Description
					</button>
					<button 
						class="block-bit"
						v-if="!showingImages"
						@click="showingImages = true;"
					>
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Images
					</button>
					<button 
						class="block-bit"
						v-if="!showingSkills"
						@click="showingSkills = true;"
					>
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Skills
					</button>
					<button 
						class="block-bit"
						v-if="!showingTeams"
						@click="showingTeams = true;"
					>
						<div class="icon"><font-awesome-icon icon="fa-solid fa-plus" /></div>
						Teams
					</button>
					<button 
						class="block-bit"
						v-if="!showingCategories"
						@click="showingCategories = true;"
					>
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
import EditSection from './creation/EditSection.vue'

export default {
	components: {
		Story,
		EntryCreator,
		EditSection,
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
			showingNickname: false,
			showingDescription: false,
			showingImages: false,
			showingSkills: false,
			showingCategories: false,
			showingTeams: false,
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
		},
		hideEditSection(title) {
			if(title === 'Nickname') this.showingNickname = false;
			if(title === 'Description') this.showingDescription = false;
			if(title === 'Images') this.showingImages = false;
			if(title === 'Skills') this.showingSkills = false;
			if(title === 'Categories') this.showingCategories = false;
			if(title === 'Teams') this.showingTeams = false;
		},
		createDrag() {
			// https://www.w3schools.com/howto/howto_js_draggable.asp
			const popupNode = document.querySelector('.creation');
			dragElement(popupNode);

			function dragElement(elmnt) {
				var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
				popupNode.querySelector('.creation__header').onmousedown = dragMouseDown;

				function dragMouseDown(e) {
					e = e || window.event;
					e.preventDefault();
					pos3 = e.clientX;
					pos4 = e.clientY;
					document.onmouseup = closeDragElement;
					document.onmousemove = elementDrag;
				}

				function elementDrag(e) {
					e = e || window.event;
					e.preventDefault();
					pos1 = pos3 - e.clientX;
					pos2 = pos4 - e.clientY;
					pos3 = e.clientX;
					pos4 = e.clientY;
					elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
					elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
				}

				function closeDragElement() {
					document.onmouseup = null;
					document.onmousemove = null;
				}
			}
		},
	},
	mounted(){
		this.createDrag();
	},
}
</script>

<style scoped lang="less">

@import "/src/global.less";

@timelineColWidth: 18rem;
@padding: .5rem;
@margin: .5rem;

.creation {
	position: absolute;
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