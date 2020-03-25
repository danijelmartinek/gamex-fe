<template>
    <div id="app">
        <defaultNav>
            <router-view />
        </defaultNav>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import defaultNav from '@/layouts/default.vue';

    export default defineComponent({
        components: {
            defaultNav
        }
    });
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
