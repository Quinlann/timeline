<script>
export default {
  props: ['title', 'dropdownOptions'],
  data() {}
}
</script>

<template>
<div class="nav__btn dropdown">
	<font-awesome-icon v-if="title === 'Worlds'" icon="fa-solid fa-globe" />
	<font-awesome-icon v-if="title === 'Locations'" icon="fa-solid fa-location-dot" />
	<font-awesome-icon v-if="title === 'Entities'" icon="fa-solid fa-location-crosshairs" />
	{{ title }}
    <div class="list">
      <input class="search" value="Search">
      <ul>
        <li v-for="option in dropdownOptions">{{ option }}</li>
        <li class="add">
			<font-awesome-icon icon="fa-solid fa-plus" />
		</li>
      </ul>
    </div>
</div>
</template>

<style scoped lang="less">
.nav__btn {
	padding: .5rem 0;
	border-radius: .5rem;
	background-color: lightgrey;
	margin: 0 .25rem;
	font-weight: bold;
	min-width: 10rem;
	text-align: center;
	position: relative;
	
	&:hover {
		background-color: grey;
		border-radius: .5rem .5rem 0 0;
	}
}

.dropdown {
	position: relative;
	display: none;
	&:hover > .list { display: block }
	
	.search {
		margin-bottom: .5rem;
		background-color: fade(white, 50%);
		width: 100%;
	}
	
	.list {
		display: none;
		position: absolute;
		top: 100%;
		list-style: none;
		text-align: left;
		padding: .5rem;
		margin: 0;
		background-color: lightgrey;
		border-radius: 0 0 .5rem .5rem;
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	li {
		padding: .5rem;
		border-radius: .5rem;
		list-style-type: none;
		margin-bottom: .25rem;
		background-color: fade(white, 20%);
		font-size: .8rem;
		&:hover { background-color: grey }
		
		&.add {
			text-align: center;
			color: white;
			font-size: 1rem;
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
