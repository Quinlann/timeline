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
		<div class="creation__body">
			<div class="creation__info">
				<EditSection 
					v-if="showingNicknames"
					:title="'Nicknames'"
					@hideEditSection="hideEditSection"
				/>
				<EditSection
					v-if="showingDescription"
					:title="'Description'"
					@hideEditSection="hideEditSection"
				/>
				<EditSection
					v-if="showingImages"
					:title="'Images'"
					@hideEditSection="hideEditSection"
				/>
				<EditSection
					v-if="showingSkills"
					:title="'Skills'"
					@hideEditSection="hideEditSection"
				/>
				<EditSection
					v-if="showingTeams"
					:title="'Teams'"
					@hideEditSection="hideEditSection"
				/>
				<EditSection
					v-if="showingCategories"
					:title="'Categories'"
					@hideEditSection="hideEditSection"
				/>

				<div class="block">
					<div class="block__add">
						<button
							class="block-bit"
							v-if="!showingNicknames"
							@click="showingNicknames = true;"
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
					ref="storyRef"
					@openEntryCreator="(entry) => {showEntryCreatorEntry = entry; showEntryCreator = true;}"
				/>
			</div>
		</div>

		<div class="creation__footer">
			<button class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></button>
			<button class="acceptBtn"><font-awesome-icon icon="fa-solid fa-check" /></button>
		</div>

		

		<div class="prompt__shadow">
			<div class="prompt">
				<div class="prompt__title"></div>
				<div class="prompt__body">
					<p>Are you sure you want to delete [EntityName]</p>
				</div>
				<div class="prompt__buttons">
					<button class="decline">No</button>
					<button class="accept">Yes</button>
				</div>
			</div>
		</div>
	</div>

	<EntryCreator
			v-if="showEntryCreator"
			@closeEntryCreator="showEntryCreator = false;"
			@saveEntry="saveEntryLocation"
			@deleteEntry="deleteEntry"
			:entry="showEntryCreatorEntry"
	></EntryCreator>

	<div class="prompt__shadow">
		<div class="prompt">
			<div class="prompt__title"></div>
			<div class="prompt__body">
				<p>Are you sure you want to delete [EntityName]</p>
			</div>
			<div class="prompt__buttons">
				<button class="decline">No</button>
				<button class="accept">Yes</button>
			</div>
		</div>
	</div>

>>>>>>> ff7b69eb8972ff8977f06b97016b4c95850c36cf
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import { useMapStore } from '/src/stores/MapStore.js';

	const MapStore = useMapStore(),
		MapData = MapStore.MapData;

	import Story from './creation/Story.vue';
	import EntryCreator from './creation/EntryCreator.vue';
	import EditSection from './creation/EditSection.vue';

	const props = defineProps(['closePop']);

	let entity = ref({});

	let showingNicknames = ref(false),
	showingDescription = ref(false),
	showingImages = ref(false),
	showingSkills = ref(false),
	showingTeams = ref(false),
	showingCategories = ref(false);

	let showEntryCreator = ref(false),
	showEntryCreatorEntry = ref({});

	const storyRef = ref(null);

	const setEntity = (entityId) => {
		if(entityId || entityId === 0) {
			entity.value = MapData.entities[entityId];
			storyRef.value.setEntity(entity.value);
		} else {
			storyRef.value.setEntity(MapData.tempEntity);
		}
	};

	const saveEntryLocation = (entryId, newLocation) => {
		showEntryCreator.value = false;
		addNewLocationToEntry(entryId, newLocation);
	};

	const addNewLocationToEntry = (entryId, newLocation) => {
		const entry = entity.value.story.find(x => x.id === entryId);
		entry.location = newLocation;
		entry.name = newLocation;
		
		MapStore.convertEntryLocations();
	}

	const deleteEntry = (entryId) => {
		const entry = entity.value.story.find(x => x.id === entryId),
		index = entity.value.story.indexOf(entry);
		entity.value.story.splice(index, 1);

		MapStore.convertEntryLocations();
	}

	const hideEditSection = (title) => {
		if(title === 'Nicknames') showingNicknames.value = false;
		if(title === 'Description') showingDescription.value = false;
		if(title === 'Images') showingImages.value = false;
		if(title === 'Skills') showingSkills.value = false;
		if(title === 'Categories') showingCategories.value = false;
		if(title === 'Teams') showingTeams.value = false;
	};

	const createDrag = () => {
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
	}

	onMounted(() => {
		createDrag();
	});

	defineExpose({setEntity});

</script>

<style scoped lang="less">

@import "/src/global.less";

@timelineColWidth: 18rem;
@padding: 1rem;
@margin: 1rem;

.creation {
	position: absolute;
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	border-radius: @padding;
	overflow: hidden;
	z-index: 1;
	animation: windowReveal .3s;

	&.entityCreator {
		.creation__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		padding: @padding;
		
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

	&__body {
		display: flex;
		padding: 1rem;
		background-color: fade(white, 2%);
	}

	&__info {
		width: ~"calc(100% - (@{timelineColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__story {
		width: @timelineColWidth;
	}

	&__footer {
		width: 100%;
		clear: both;
		display: flex;
		justify-content: space-between;
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

.prompt {
	max-width: 60%;
	padding: 1rem;
	border-radius: 1rem;
	background-color: fade(@black, 80%);
	text-align: center;
	animation: windowReveal .3s;

	&__shadow {
		position: absolute;
		width: 100%; height: 100%;
		top: 0; left: 0;
		background-color: fade(black, 50%);
		display: flex;
		align-items: center;
    	justify-content: center;
		z-index: 1;

		display: none;
	}

	&__buttons {
		display: flex;
		justify-content: space-evenly;

		button {
			min-width: 5rem;
			padding: .5rem;
			font-size: 1rem;
			align-items: center;
			border-radius: .5rem;
			background-color: fade(@white, 20%);
			color: @white;
			&:not(:last-child) { margin-right: .25rem }
			&.accept { background: @item-color }
		}
	}
}
</style>