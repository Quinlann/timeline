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
    <div class="creation entityCreator">
		<div class="creation__header">
			<div class="top">
				<div class="icon"><font-awesome-icon icon="fa-solid fa-user" /></div>
				<div class="name">Benjamin Bak Egede</div>
				<div class="closeBtn">X</div>
			</div>
			<div class="bottom">
				<div class="path">World 1</div>
			</div>
		</div>
		<div class="creation__info">
			<div class="block">
				<div class="block__title">Nickname</div>
				<div class="block__content">
					<div class="info-bit">Bem</div>
					<div class="info-bit btn add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
			<div class="block">
				<div class="block__title">Description</div>
				<div class="block__content"><input type="text"></div>
			</div>
			<div class="block">
				<div class="block__title">Images</div>
				<div class="block__content">
					<div class="info-bit img"></div>
					<div class="info-bit img btn add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
		</div>

		<div class="creation__timeline">
			<div class="block">
				<div class="block__title">Timeline</div>
				<div class="block__content">					
					<div class="time">
						<div class="type birth">
							<div class="date">05.10.1992</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="date">03.21.2001</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type travel">
							<div class="date">2004</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-route" /></div>
							<div class="setting">T: 50% L: 10%</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="date">03.02.2004</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type death">
							<div class="date">05.10.2023</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-skull" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type birth">
							<div class="date">05.10.2024</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						<div class="deleteBtn"><font-awesome-icon icon="fa-solid fa-trash" /></div>
					</div>

					<div class="time">
						<div class="type change">
							<div class="date">05.10.2024</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-feather-pointed" /></div>
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
		<img src="/src/assets/worldmap_w.svg">
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
	background: @background-color;
	color: @background-color-inverted;
}

@timelineColWidth: 18rem;
@padding: .5rem;
@margin: .5rem;

.creation {
	//display: none;
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	border-radius: .5rem;
	padding: 1rem;
	//box-shadow: 0 5px 10px fade(black, 20%);
	z-index: 1;

	&.entityCreator {
		.creation__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid @black;
		padding-bottom: .5rem;
		margin-bottom: 1rem;
		
		.icon {
			margin-right: .5rem;
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
		.block__content { flex-direction: column }
	}

	.block {
		&:not(:last-child) { margin-bottom: 1rem }
		
		&__title {
			text-transform: uppercase;
			font-weight: bold;
			margin: 0 0 .25rem .25rem;
		}

		&__content {
			padding: .5rem;
			background-color: fade(black, 20%);
			border-radius: 1.5rem;
			display: flex;
		}

		.info-bit {
			background-color: fade(@white, 20%);
			border-radius: 1rem;
			display: inline-block;
			padding: 0 .5rem;
			font-size: .8rem;
			height: 1.5rem;
			line-height: 1.5rem;
			overflow: hidden;
			transition: .2s;
			&:not(:last-child) { margin-right: .25rem }
			&:not(.btn):hover { padding-right: 2rem }
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
			background-color: fade(white, 20%);
			border-radius: 1rem;
			color: @background-color-inverted;
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
					text-align: center;
					width: 2rem;
				}
				
				&.birth { .gradient(@yellowDark, darken(@yellowDark, 10%)); }
				&.place { .gradient(@red, darken(@red,10%)); }
				&.travel { .gradient(@blue, darken(@blue,10%)); }
				&.death { .gradient(@purple, darken(@purple,10%)); }
				&.change { .gradient(grey, darken(grey,10%)); }

				.date, .setting {
					width: 50%;
					background-color: fade(@black, 20%);
					text-align: center;
					padding: .25rem;
					border-radius: 1rem;
					overflow:hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.editBtn, .deleteBtn {
				background-color: fade(@white, 10%);
				padding: .5rem;
				transition: .2s;
			}

			.editBtn {
				color: fade(@white, 50%);
				border-radius: 1rem 0 0 1rem;
				&:hover { background-color: fade(@white, 20%) }
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
				background-color: fade(@white, 10%);
				display: flex;
				justify-content: center;
				transition: .2s;
				&:hover { background-color: fade(@white, 20%) }
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