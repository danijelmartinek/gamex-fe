<template>
    <div id="homePage">
        <section-1></section-1>
        <section-2></section-2>
    </div>
</template>

<script>
    import Section1 from './section1.vue';
    import Section2 from './section2.vue';

    export default {
        name: 'Home-page',
        components: {
            Section1,
            Section2
        }
    };
</script>
