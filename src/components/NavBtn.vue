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
@navBtn-padding: .5rem;
@navBtn-radius: 1rem;

.nav__btn {
	padding: @navBtn-padding 0;
	border-radius: @navBtn-radius;
	background-color: lightgrey;
	margin: 0 (@navBtn-padding / 2);
	//font-weight: bold;
	min-width: 10rem;
	text-align: center;
	position: relative;
	
	&:hover {
		background-color: grey;
		border-radius: @navBtn-radius @navBtn-radius 0 0;
	}
}

.dropdown {
	position: relative;
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
		padding: @navBtn-padding;
		margin: 0;
		background-color: lightgrey;
		border-radius: 0 0 @navBtn-radius @navBtn-radius;
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
		margin-bottom: (@navBtn-padding / 2);
		background-color: fade(white, 20%);
		font-size: .8rem;
		&:hover { background-color: grey }
		
		&.add {
			text-align: center;
			//color: white;
			//font-size: 1rem;
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
