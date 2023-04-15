<script>
import Entity from './map/Entity.vue'

export default {
	components:  {Entity},
	data() {
		return {
			entityName: 'hello name',
			entities: [
				{
					color: 'purple',
					x: 50,
					y: 50,
					text: 'testtest'
				},
				{
					color: 'blue',
					x: 25,
					y: 33,
					text: 'blabla'
				}
			]
		}
	}
}

let zoom = 100;
document.addEventListener("wheel", function(e) {
	const ZOOM_SPEED = 10;
    const zoomElement = document.querySelector(".map");
	if (e.deltaY > 0) {    
        zoomElement.style.width = `${zoom -= ZOOM_SPEED}%`;  
    } else {    
        zoomElement.style.width = `${zoom += ZOOM_SPEED}%`;
	}
});

</script>

<template>
<div id="wrapper">
    <div class="creation">
		<div class="creation__header">
			<div class="top">
				<div class="icon">O</div>
				<div class="name">[Name]</div>
				<div class="closeBtn">X</div>
			</div>
			<div class="bottom">
				<div class="path">World 1</div>
			</div>
		</div>
		<div class="creation__info">
			<div class="section">
				<div class="section__title">Nickname</div>
				<div class="section__content"><input type="text"></div>
			</div>
			<div class="section">
				<div class="section__title">Description</div>
				<div class="section__content"><input type="text"></div>
			</div>
			<div class="section">
				<div class="section__title">Images</div>
				<div class="section__content">
					<div class="btn add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
		</div>

		<div class="creation__timeline">
			<div class="section">
				<div class="section__title">Timeline</div>
				<div class="section__content"></div>
			</div>
		</div>
	</div>
	<div class="map">
		<img src="/src/assets/worldmap.svg">
		<Entity v-for="entity in this.entities" :color="entity.color" :x="entity.x" :y="entity.y" :name="entity.text"/>
	</div>
</div>
</template>

<style scoped lang="less">
@import "/src/global.less";

@icon-size: 2rem;

#wrapper {
	min-height: calc(100vh - @navigation-height);
	position: relative;
	padding-top: @navigation-height;
	display: flex;
	justify-content: center;
	align-items: center;
}

.creation {
	background-color: lightgrey;
	max-width: 45rem;
	width: 45rem;
	border-radius: .5rem;
	padding: .5rem;
	box-shadow: 0 5px 10px fade(black, 20%);
	z-index: 1;

	&__header {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid @black;
		padding-bottom: .5rem;
		margin-bottom: .5rem;
		.top { margin-bottom: .25rem }
		
		.icon {
			margin-right: .25rem;
			float: left;
		}
		
		.name {
			text-transform: uppercase;
			font-weight: bold;
			float: left;
		}

		.closeBtn {
			float: right;
		}

		.path {
			font-size: .8rem;
		}
	}

	&__info {
		float: left;
		width: ~"calc(100% - 15.5rem)";
		margin-right: .5rem;
	}

	&__timeline {
		float: left;
		width: 15rem;
	}

	.section {
		&:not(:last-child) { margin-bottom: .5rem }
		
		&__title {
			text-transform: uppercase;
			font-weight: bold;
			margin: 0 0 .25rem .25rem;
		}

		&__content {
			padding: .5rem;
			background-color: fade(@white, 20%);
			border-radius: .5rem;
		}

		.btn {
			min-width: 4rem;
			width: 4rem;
			height: 5rem;
			background-color: fade(@black, 10%);
			
			&.add {
				text-align: center;
				line-height: 5rem;
				border-radius: .5rem;
			}

			&:hover {
				background-color: fade(@black, 20%);
			}
		}

		input {
			width: 100%;
			border: none;
			padding: .25rem 0;
			background-color: fade(white, 50%);
		}
	}
}

.map {
	background-size: contain;
	width: 100%;
	position: fixed;
}

.entity {
	width: @icon-size;
	height: @icon-size;
	border-radius: 50%;
	outline: 1px solid white;
	text-align: center;
	color: white;
	position: absolute;
	line-height: @icon-size;
	transition: .2s;
	cursor: pointer;
	transform: translate(-50%, -50%);
	&:hover { transform: translate(-50%, -50%) scale(1.2) }
	
	&.red { background-color: red }
	&.purple { background-color: purple }
	&.green { background-color: green }
	&.blue { background-color: blue }
	
	&.e1 { top: 50%; left: 50% }
	&.e2 { top: 40%; left: 20% }
	&.e3 { top: 20%; left: 80% }
	&.e4 { top: 60%; left: 30% }
}
</style>