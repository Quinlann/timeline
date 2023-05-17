<template>
    <div 
		class="storyEntryCreator"
		:class="entry.type"
	>
		<div class="block when">
			<h3>When</h3>
			<div class="block__inner">
				<input 
					type="text"
					:value="entry.startDateStr"
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
						v-for="location in locations"
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
				@click="this.$emit('close-entry-creator')"
			><font-awesome-icon icon="fa-solid fa-trash" /></button>
			<button
				class="acceptBtn"
				@click="this.$emit('save-entry-creator', entry.id, newLocation)"
			><font-awesome-icon icon="fa-solid fa-check" /></button>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'entry',
		'locations',
	],
	data() {
		return {
			newLocation: ''
		}
	},
	watch: {
		entry() {
			this.newLocation = this.entry.location;
		}
	},
	mounted() {
		this.newLocation = this.entry.location;
	},
}
</script>

<style scoped lang="less">

@import "/src/global.less";

.storyEntryCreator {
	max-width: 12rem;
	width: 12rem;
	padding: .5rem;
	background: @black;
	text-align: center;
	border-radius: 1.5rem;
	position: absolute;
	z-index: 1;

	input, select {
		padding: .5rem;
		border-radius: 1rem;
		border: none;
		color: white;
	}

	select {
		background-color: fade(@black, 20%);
		&:not(:last-child) { margin-bottom: .25rem; }
		option { background-color: fade(black, 80%) }
	}

	input {
		background-color: fade(@white, 20%);
	}

	.block {
		&__inner {
			display: flex;
			flex-direction: column;
		}

		h3 { margin-bottom: .5rem }

		&.when input { text-align: center }

		&.what {
			.block__inner {
				border-radius: 1.2rem;
				padding: .25rem;
			}

			select { text-align: center }
		}
	}

	&.birth {
		outline: .2rem solid @yellowDark;
		.block.what .block__inner { .gradient(@yellowDark, darken(@yellowDark,10%)) }
	}
	
	&.place {
		outline: .2rem solid @red;
		.block.what .block__inner { .gradient(@red, darken(@red,10%)) }
	}

	&.travel {
		outline: .2rem solid @blue;
		.block.what .block__inner { .gradient(@blue, darken(@blue,10%)) }
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

		.deleteBtn, .acceptBtn {
			width: 2.5rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			border-radius: 50%;
			color: fade(@white, 50%);
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
}

</style>