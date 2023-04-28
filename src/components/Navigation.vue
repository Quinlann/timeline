<script>
import NavBtn from './NavBtn.vue'

export default {
    components:  {NavBtn},
    props: {
        addEntity: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            settings: {
                worlds: ['World 1', 'World 2'],
                locations: ['Danmark', 'Norge', 'Sverige'],
                entities: ['Benjamin Bak Egede', 'Henrik Tobiesen Aabom', 'Han Solo', 'Philip Marquard', 'Luke Skywalker', 'Jack Boone']
            }
        }
    }
}
</script>

<template>
<div id="navigation">
    <div class="settings">
        <NavBtn title="Worlds" :dropdownOptions="settings.worlds" />
        <NavBtn title="Locations" :dropdownOptions="settings.locations" />
        <NavBtn title="Entities" :dropdownOptions="settings.entities" @add-entity="addEntity()" />
    </div>
</div>
</template>

<style scoped lang="less">
@import "/src/global.less";

#navigation {
	background-color: fade(black, 10%);
	height: @navigation-height;
	width: 100%;
	position: fixed;
	z-index: 1;

    .settings {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}
</style>