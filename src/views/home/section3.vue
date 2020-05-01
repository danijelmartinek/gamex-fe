<template>
    <div id="section-3">
        <div class="hiw-heading">
            <h1>How It Works</h1>
        </div>
        <div class="hiw-elements">
            <div>
                <h2>Log In</h2>
                <p>Log in and get a direct access to more than 200+games!</p>
                <img src="https://via.placeholder.com/500" alt="." />
            </div>
            <div>
                <h2>Pick A Game</h2>
                <p>Pick any game you would liketo play solo or with friends.</p>
                <img src="https://via.placeholder.com/500" alt="." />
            </div>
            <div>
                <h2>Play!</h2>
                <p>
                    Play the game! After you finished playing, pay for the time
                    played.
                </p>
                <img src="https://via.placeholder.com/500" alt="." />
            </div>
        </div>
        <h3 class="hiw-action-text">
            Want to know more about our process? <a href="">Click here</a>
        </h3>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';

    export default defineComponent({});
</script>

<style lang="scss" scoped>
    @import './../../styles/reset.scss';
    @import './../../styles/breakpoints.scss';

    $nav-height: 10vh;

    #section-3 {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        align-items: center;
        justify-items: center;
        background-color: rgb(14, 14, 14);

        .hiw-heading {
            max-width: 1520px;
            padding: 2em;
            color: white;

            h1 {
                font-size: 2em;
                text-align: center;
            }

            @include breakpoint('s') {
                font-size: 1.2em;
            }

            @include breakpoint('m') {
                font-size: 1.5em;
            }
        }

        .hiw-elements {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            align-items: stretch;
            justify-items: center;
            grid-row-gap: 2em;
            grid-column-gap: 2em;
            box-sizing: border-box;
            padding: 0em 1em 0em 1em;

            @include breakpoint('xxs') {
                padding: 0em 3em 0em 3em;
            }

            @include breakpoint('xs') {
                padding: 0em 6em 0em 6em;
            }

            @include breakpoint('s') {
                grid-template-columns: 1fr 1fr 1fr;
                grid-row-gap: 3em;
                grid-column-gap: 3em;
                padding: 0em 3em 0em 3em;
            }

            @include breakpoint('m') {
                grid-row-gap: 6em;
                grid-column-gap: 6em;
                padding: 0em 6em 0em 6em;
            }

            @include breakpoint('l') {
                max-width: 1680px;
                grid-row-gap: 12em;
                grid-column-gap: 12em;
            }

            div {
                width: 100%;
                text-align: center;

                h2 {
                    text-transform: uppercase;
                    padding-bottom: 0.5em;
                }

                p {
                    height: 4em;
                    margin-bottom: 1em;
                }

                img {
                    width: 100%;
                    border-radius: 2%;
                }
            }
        }

        .hiw-action-text {
            padding: 3em 2em 3em 2em;
            text-align: center;

            a {
                color: #fff;

                &:hover {
                    opacity: 0.5;
                }
            }
        }
    }
</style>
