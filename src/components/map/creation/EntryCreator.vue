<template>
	<div 
		class="storyEntryCreator"
		:class="entry.type"
	>
		<div class="storyEntryCreator__header">
			<div class="icon">
				<font-awesome-icon v-if="entry.type === 'birth'" icon="fa-solid fa-sun"/>
				<font-awesome-icon v-if="entry.type === 'place'" icon="fa-solid fa-location-dot"/>
				<font-awesome-icon v-if="entry.type === 'travel'" icon="fa-solid fa-route"/>
				<font-awesome-icon v-if="entry.type === 'death'" icon="fa-solid fa-skull"/>
				<font-awesome-icon v-if="entry.type === 'change'" icon="fa-solid fa-feather-pointed"/>
			</div>
			<button 
				class="closeBtn"
				@click="closeEntryCreator"
			>
				<font-awesome-icon icon="fa-solid fa-xmark" />
			</button>
		</div>
		<div class="block when">
			<h3>When</h3>
			<div class="block__inner">
				<input 
					type="text"
					:value="MapStore.euConvertDateStr(entry.startDateStr)"
					disabled
				>
			</div>
		</div>
		<div class="block what">
			<h3>What</h3>
			<div class="block__inner">
				<select 
					class="entrySetting"
					name="entrySetting"
					:disabled="entry.type"
				>
					<option
						value="Place"
						:selected="entry.type === 'place'"
					>Place</option>
					<option
						value="Travel"
						:selected="entry.type === 'travel'"
					>Travel</option>
				</select>
				<select
					class="placeSetting"
					name="placeSetting"
					:disabled="entry.location"
				>
					<option
						value="Location"
						:selected="entry.location"
					>Location</option>
					<option value="Coordinates">Coordinates</option>
					<option value="Unknown">Unknown</option>
				</select>
				<select
					v-if="entry.type !== 'travel'"
					v-model="newLocation"
					class="locationList"
					name="locationList"
				>
					<option
						v-for="location in MapData.locations"
						:value="location.name"
						:selected="entry.location === location.name"
					>{{ location.name }}</option>
				</select>
			</div>
		</div>
		<div class="block why">
			<h3>Why</h3>
			<div class="block__inner">
				<input type="text">
			</div>
		</div>
		<div class="storyEntryCreator__footer">
			<button
				class="deleteBtn"
				@click="deleteEntry(entry.id)"
			><font-awesome-icon icon="fa-solid fa-trash" /></button>
			<button
				class="acceptBtn"
				@click="saveEntry(entry.id, newLocation)"
			><font-awesome-icon icon="fa-solid fa-check" /></button>
		</div>
	</div>
</template>

<script setup>
import { useMapStore } from '/src/stores/MapStore.js';
const MapStore = useMapStore(),
	MapData = MapStore.MapData;
import { ref, onMounted } from 'vue';

const props = defineProps(['entry']);
const emit = defineEmits(['close-entry-creator','save-entry', 'delete-entry']);

let newLocation = ref('');

onMounted(() => {
	newLocation.value = props.entry.location;
});

const closeEntryCreator = () => {
	emit('close-entry-creator');
}
const saveEntry = (entryId, newLocation) => {
	emit('save-entry', entryId, newLocation);
}

const deleteEntry = (entryId) => {
	emit('delete-entry', entryId);
	closeEntryCreator();
}

const createDrag = () => {
	// https://www.w3schools.com/howto/howto_js_draggable.asp
	const popupNode = document.querySelector('.storyEntryCreator');
	dragElement(popupNode);

	function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	popupNode.querySelector('.storyEntryCreator__header').onmousedown = dragMouseDown;

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

</script>

<style scoped lang="less">
@import "/src/global.less";

@headerSize: 2rem;

.storyEntryCreator {
	max-width: 12rem;
	width: 12rem;
	background: @black;
	text-align: center;
	border-radius: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: hidden;
	z-index: 1;
	animation: windowReveal .3s;

	input, select {
		padding: .5rem;
		border-radius: 1rem;
		border: none;
		color: white;
	}

	select {
		background-color: fade(black, 10%);
		appearance: none;
		text-align: center;
		cursor: pointer;
		option { background-color: fade(black, 80%) }
		&:hover { background-color: fade(black, 20%) }

		&:after {
			content: "";
			clip-path: polygon(100% 0%, 0 0%, 50% 100%);
			width: 1rem;
  		height: 1rem;
			background-color: white;
		}
	}

	input {
		background-color: fade(@white, 20%);
	}

	&__header {
		height: @headerSize;
		width: 100%;
		display: flex;
		justify-content: space-between;

		.icon {
			padding: .5rem;
		}

		.closeBtn {
			height: @headerSize;
			width: @headerSize;
			opacity: .5;
			color: @background-color-inverted;
			&:hover { opacity: 1; }
		}
	}

	.block {
		margin: .5rem;
		
		&__inner {
			display: flex;
			flex-direction: column;
		}

		h3 { margin-bottom: .5rem }

		&.when input { text-align: center }

		&.what {
			.block__inner { border-radius: 1rem }
			select { border-radius: 0 }
		}
	}

	&.birth {
		outline: .2rem solid @yellowDark;
		.block.what .block__inner { .gradient(@yellowDark, darken(@yellowDark,10%)) }
	}
	
	&.place {
		//outline: .2rem solid @red;
		.storyEntryCreator__header { background-color: @red }
		.block.what .block__inner { background-color: @red }
	}

	&.travel {
		//outline: .2rem solid @blue;
		.storyEntryCreator__header { background-color: @blue }
		.block.what .block__inner { background-color: @blue }
	}

	&.death {
		outline: .2rem solid @purple;
		.block.what .block__inner { .gradient(@purple, darken(@purple,10%)) }
	}

	&.follow {
		outline: .2rem solid @green;
		.block.what .block__inner { .gradient(@purple, darken(@green,10%)) }
	}

	&__footer {
		width: 100%;
		clear: both;
		padding-top: 1rem;
		display: flex;
		justify-content: space-between;
		
		button {
			width: 100%;
			height: 2.5rem;
		}
	}
}
</style>