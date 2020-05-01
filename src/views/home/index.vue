<template>
    <div id="home-page">
        <section-1></section-1>
        <section-2></section-2>
        <section-3></section-3>
        <section-4></section-4>
    </div>
</template>

<script>
    import Section1 from './section1.vue';
    import Section2 from './section2.vue';
    import Section3 from './section3.vue';
    import Section4 from './section4.vue';

    export default {
        name: 'Home-page',
        components: {
            Section1,
            Section2,
            Section3,
            Section4
        }
    };
</script>
