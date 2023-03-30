<script>
export default {
  props: ['title', 'dropdownOptions'],
}
</script>

<template>
<div class="nav__btn dropdown">
  {{ title }}
    <div class="nav__btn-list">
      <input class="search" value="Search">
      <ul>
        <li v-for="option in dropdownOptions">{{ option }}</li>
        <li class="add">+</li>
      </ul>
    </div>
</div>
</template>

<style scoped lang="less">
.settings .nav__btn {
	padding: .5rem 0;
	border-radius: .5rem;
	background-color: lightgrey;
	margin: 0 .25rem;
	font-weight: bold;
	min-width: 10rem;
	text-align: center;
	position: relative;
}

.settings .nav__btn:hover {
	background-color: grey;
	border-radius: .5rem .5rem 0 0;
}

.dropdown {
	position: relative;
}

.nav__btn .search {
	margin-bottom: .5rem;
	background-color: rgba(255,255,255,.5);
}

.nav__btn-list {
	display: none;
	position: absolute;
	top: 100%;
	list-style: none;
	text-align: left;
	padding: .5rem;
	margin: 0;
	background-color: lightgrey;
	border-radius: 0 0 .5rem .5rem;
	//width: 100%;
}

.nav__btn ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
}

.nav__btn ul li {
	padding: .5rem;
	border-radius: .5rem;
	list-style-type: none;
	margin-bottom: .25rem;
	background-color: rgba(255,255,255,.2);
	font-size: .8rem;
}

.nav__btn ul li:hover {
	background-color: grey;
}

.nav__btn ul li.add {
	text-align: center;
	color: white;
	font-size: 1rem;
}

.dropdown:hover > .nav__btn-list {
	display: block;
}

li.dropdown .nav__btn-list {
	top: -.5rem;
	left: 100%;
	width: 100%;
}

li.dropdown:after {
	content: '>';
	float: right;
	color: white;
}
</style>
