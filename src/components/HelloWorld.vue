<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>{{ a }}</h3>
        <button @click="increment()">Click me</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from '@vue/composition-api';

    export default defineComponent({
        props: {
            msg: String
        },
        setup(props) {
            const a = ref<number>(0);

            const increment = (): void => {
                a.value++;
            };

            return { a, increment };
        }
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
