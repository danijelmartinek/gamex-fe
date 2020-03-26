<template>
    <div id="app">
        <mainNav>
            <router-view />
        </mainNav>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import mainNav from '@/layouts/main.vue';

    export default defineComponent({
        components: {
            mainNav
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
