<script>
import Entity from './map/Entity.vue'

export default {
	props:['entities'],
	components:  {Entity},
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
				<div class="icon"><font-awesome-icon icon="fa-solid fa-user" /></div>
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
						<div class="type birth">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="date">05.10.1992</div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="date">03.21.2001</div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type travel">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-route" /></div>
							<div class="date">2004</div>
							<div class="setting">T: 50% L: 10%</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="date">03.02.2004</div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type death">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-skull" /></div>
							<div class="date">05.10.2023</div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type birth">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="date">05.10.2024</div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type change">
							<div class="icon"><font-awesome-icon icon="fa-solid fa-feather-pointed" /></div>
							<div class="date">05.10.2024</div>
							<div class="setting">Bing Bong</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
		</div>
	</div>
	<div class="map">
		<img src="/src/assets/worldmap.svg">
		<Entity 
			v-for="entity in this.entities"
			:color="entity.color"
			:x="entity.x"
			:y="entity.y"
			:name="entity.text"
			:visible="entity.visible"
		/>
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

@timelineColWidth: 18rem;
@padding: .5rem;
@margin: .5rem;

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
		width: ~"calc(100% - (@{timelineColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__timeline {
		float: left;
		width: @timelineColWidth;
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
			&:hover { background-color: fade(@black, 20%) }
			
			&.add {
				text-align: center;
				line-height: 5rem;
				border-radius: .5rem;
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
			font-size: .8rem;
			&:not(:last-child) { margin-bottom: .25rem }

			.type {
				width: 100%;
				text-align: center;
				display: flex;
				justify-content: center;
    			align-items: center;
				padding: .25rem;
				border-radius: 1rem;
				margin-right: .25rem;
				
				.icon {
					color: @white;
					width: 2rem;
					text-align: center;
				}
				
				&.birth { .gradient(@yellowDark, darken(@yellowDark, 10%)); }
				&.place { .gradient(@red, darken(@red,10%)); }
				&.travel { .gradient(@blue, darken(@blue,10%)); }
				&.death { .gradient(@purple, darken(@purple,10%)); }
				&.change { .gradient(grey, darken(grey,10%)); }

				.date, .setting {
					width: 50%;
					background-color: fade(@white, 50%);
					text-align: center;
					padding: .25rem;
					border-radius: 1rem;
					overflow:hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					&:not(:last-child) { margin-right: .25rem }
				}
			}

			.editBtn, .deleteBtn {
				background-color: fade(@white, 50%);
				padding: .5rem;
			}

			.editBtn {
				color: fade(@black, 50%);
				border-radius: 1rem 0 0 1rem;
				&:hover { background-color: fade(@white, 90%) }
			}

			.deleteBtn {
				color: fade(@red, 50%);
				border-radius: 0 1rem 1rem 0 ;
				&:hover { background-color: fade(@red, 20%) }
			}

			&.add {
				text-align: center;
				padding: .5rem;
				border-radius: 1rem;
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