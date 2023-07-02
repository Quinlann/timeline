<template>
	<button class="nav__btn dropdown">
		<font-awesome-icon v-if="title === 'Worlds'" icon="fa-solid fa-globe" />
		<font-awesome-icon v-if="title === 'Locations'" icon="fa-solid fa-location-dot" />
		<font-awesome-icon v-if="title === 'Routes'" icon="fa-solid fa-route" />
		<font-awesome-icon v-if="title === 'Entities'" icon="fa-solid fa-location-crosshairs" />
		<font-awesome-icon v-if="title === 'Events'" icon="fa-solid fa-explosion" />
		{{ title }}
		<div class="list">
			<input class="search" onfocus="this.value=''" value="Search">
			<tempalte
				v-if="title === 'Entities'"
			>
				<ul>
					<li 
						v-for="entity in MapData.entities"
						:key="entity.id"
						@click="clickDropdownItem(entity.id)"
					>
						{{ entity.name }}
					</li>
					<li 
						@click="clickDropdownItem(null)"
						class="add"
					>
						<font-awesome-icon icon="fa-solid fa-plus" />
					</li>
				</ul>
			</tempalte>
			<tempalte
				v-if="title === 'Locations'"
			>
				<ul>
					<li 
						v-for="location in MapData.locations"
						:key="location.id"
						@click="clickDropdownItem(location.id)"
					>
						{{ location.name }}
					</li>
					<li 
						@click="clickDropdownItem(null)"
						class="add"
					>
						<font-awesome-icon icon="fa-solid fa-plus" />
					</li>
				</ul>
			</tempalte>
		</div>
	</button>
</template>

<script setup>
import {useMapStore} from '/src/stores/MapStore.js';

const MapStore = useMapStore(),
MapData = MapStore.MapData;

const props = defineProps(['title', 'items']);
const emit = defineEmits(['open-entity']);

const clickDropdownItem = (entityId) => {
	if(props.title === 'Entities') emit('open-entity', entityId);
};

const clickPlus = () => {
	if(this.title === 'Entities') this.$emit('add-entity');
};

</script>

<style scoped lang="less">
@import "/src/global.less";
@navBtn-padding: .5rem;
@navBtn-radius: 1rem;
@navBtn-color: fade(@white, 5%);
@navBtn-color-inverted: @item-color-inverted;

.nav__btn {
	padding: @navBtn-padding 0;
	border-radius: @navBtn-radius; 
	margin: 0 (@navBtn-padding / 2);
	min-width: 10rem;
	text-align: center;
	position: relative;
	background: @navBtn-color;
	color: @navBtn-color-inverted;
	font-size: 1rem;
	
	&:hover {
		border-radius: @navBtn-radius @navBtn-radius 0 0;
		background: @item-color;
	}
}

.dropdown {
	position: relative;
	
	&:hover > .list {
		opacity: 1;
		background: @item-color;
		max-height: 20rem;
	}
	
	.search {
		margin-bottom: .25rem;
		background-color: fade(@item-color-inverted, 10%);
		color: @navBtn-color-inverted;
		width: 100%;
		padding: @navBtn-padding;
		border-radius: 1rem;
		text-align: center;
		border: none;
		
		&:hover {
			background-color: @white;
			color: @black;
		}
	}
	
	.list {
		opacity: 0;
		max-height: 0;
		position: absolute;
		top: 100%;
		list-style: none;
		text-align: left;
		padding: 0 @navBtn-padding @navBtn-padding;
		margin: 0;
		background: transparent;
		border-radius: 0 0 @navBtn-radius @navBtn-radius;
		overflow: auto;
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	li {
		padding: @navBtn-padding;
		border-radius: @navBtn-radius;
		list-style-type: none;
		background-color: fade(@navBtn-color-inverted, 20%);
		font-size: .8rem;
		&:not(:last-child) { margin-bottom: (@navBtn-padding / 2) }
		
		&.add {
			text-align: center;
			background-color: fade(@navBtn-color-inverted, 10%);
		}
		
		&:hover {
			background-color: @navBtn-color-inverted;
			color: @black;
		}
		
		&.dropdown {
			.list {
				top: -.5rem;
				left: 100%;
				width: 100%;
			}
			
			&:after {
				content: '>';
				float: right;
				color: white;
			}
		}
	}
}
</style>