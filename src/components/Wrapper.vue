<script>
import Entity from './map/Entity.vue'

export default {
	props:['entities'],
	components:  {Entity},
	mounted(){
		console.log('here',this.entities);
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
				<div class="section__content">
					<div class="time">
						<div class="date birth">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							05.10.1992
						</div>
						<div class="location">Jyllinge</div>
					</div>
					<div class="time">
						<div class="date place">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							03.21.2001
						</div>
						<div class="location">Roskilde</div>
					</div>
					<div class="time">
						<div class="date travel">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							2004
						</div>
						<div class="location">T: 50% L: 10%</div>
					</div>
					<div class="time">
						<div class="date place">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							03.02.2004
						</div>
						<div class="location">Jyllinge</div>
					</div>
					<div class="time">
						<div class="date death">05.10.2023</div>
						<div class="location">Roskilde</div>
					</div>
					<div class="time">
						<div class="date birth">05.10.2024</div>
						<div class="location">Roskilde</div>
					</div>
					<div class="time">
						<div class="date change">05.10.2024</div>
						<div class="location">Bing Bong</div>
					</div>
					<div class="time add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
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
	display: none;
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
			padding: .25rem;
			background-color: fade(white, 50%);
		}

		.time {
			display: flex;
			justify-content: space-between;
			margin-bottom: .125rem;
			font-size: .8rem;
			&:not(:last-child) { margin-bottom: .25rem }
			
			div {
				padding: .25rem;
				width: 50%;
				
				position: relative;
			}

			.date {
				color: @white;
				margin-right: .125rem;
				border-radius: 1rem .25rem .25rem 1rem;
				
				&.birth { .gradient(rgb(173, 173, 53), darken(rgb(173, 173, 53),10%)); }
				&.place { .gradient(red, darken(red,10%)); }
				&.travel { .gradient(blue, darken(blue,10%)); }
				&.death { .gradient(purple, darken(purple,10%)); }
				&.change { .gradient(grey, darken(grey,10%)); }

				.icon {
					display: inline;
				}
			}

			.location {
				text-align: right;
				margin-left: .25rem;
				background-color: fade(@white, 20%);
				border-radius: .25rem 1rem 1rem .25rem;
			}

			&.add {
				text-align: center;
				padding: .25rem;
				border-radius: .25rem;
				background-color: fade(@black, 10%);
				display: flex;
				justify-content: center;
				&:hover { background-color: fade(@black, 20%) }
			}
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