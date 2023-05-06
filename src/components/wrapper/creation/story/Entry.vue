<template>
	<button class="entry">
		<div 
			class="type birth"
			:class="entry.type"
		>
			<div class="date">{{ this.entry.startDateStr }}</div>
			<div class="icon">
				<font-awesome-icon v-if="entry.type === 'birth'" icon="fa-solid fa-sun"/>
				<font-awesome-icon v-if="this.entry.type === 'place'" icon="fa-solid fa-location-dot"/>
				<font-awesome-icon v-if="entry.type === 'travel'" icon="fa-solid fa-route"/>
				<font-awesome-icon v-if="entry.type === 'death'" icon="fa-solid fa-skull"/>
				<font-awesome-icon v-if="entry.type === 'change'" icon="fa-solid fa-feather-pointed"/>
			</div>
			<div class="setting">{{ this.entry.name }}</div>
		</div>
	</button>
</template>

<script>

export default {
	props: ['entry'],
	computed: {
		entryIcon: () => {
			const entryType = this.entry.type;
			
			let entryIcon = '';

			if (entryType === 'birth') entryIcon = 'fa-sun';
			else if (entryType === 'location') entryIcon = 'fa-location-dot';
			else if (entryType === 'route') entryIcon = 'fa-route';
			else if (entryType === 'death') entryIcon = '';
			else if (entryType === 'change') entryIcon = 'fa-feather-pointed';
			else entryIcon = 'fa-location-crosshairs';

			return `fa-solid ${entryIcon}`;
		}
	},
}

</script>

<style scoped lang="less">

@import "/src/global.less";

.entry {
	display: flex;
	color: @background-color-inverted;
	&:not(:last-child) { margin-bottom: .25rem }

	.type {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .25rem;
		border-radius: 1rem;
		transition: .2s;
		z-index: 1;
		&:hover { opacity: .8 }
		
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

	&.active {
		border: solid 2px yellow;
		border-radius: 25px;
	}
}

</style>