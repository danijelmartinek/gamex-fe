<template>
    <div id="homePage">
        <section-1></section-1>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Section1 from './section1.vue';

    export default {
        name: 'Home-page',
        components: {
            Section1
        }
    };
</script>
