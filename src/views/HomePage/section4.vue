<template>
    <div id="section-4">
        <div class="ayrtp-container">
            <div class="ayrtp-bg-img">
                <img
                    src="https://images3.alphacoders.com/559/559308.jpg"
                    alt="bg"
                />
                <div class="ayrtp-img-overlay"></div>
            </div>
            <div class="ayrtp-content">
                <h1>Are you ready to play?</h1>
                <button>Join now</button>
            </div>
        </div>
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

    #section-4 {
        .ayrtp-container {
            width: 100%;
            height: 30em;
            position: relative;

            .ayrtp-bg-img {
                width: 100%;
                height: 100%;
                position: absolute;
                overflow: hidden;

                img {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: 0 0;
                }

                .ayrtp-img-overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                }
            }

            .ayrtp-content {
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
                text-align: center;
                position: absolute;

                h1 {
                    font-size: 1.8em;
                    padding: 0.8em;

                    @include breakpoint('s') {
                        font-size: 2.5em;
                    }

                    @include breakpoint('m') {
                        font-size: 3em;
                    }
                }

                button {
                    @include button-reset;

                    width: calc(100% - 2em);
                    margin: 1em;
                    font-size: 0.8em;
                    padding: 1em 2em 1em 2em;
                    border-radius: 0.2em;
                    background-color: rgb(255, 123, 0);

                    @include breakpoint('xxs') {
                        font-size: 1em;
                        width: initial;
                        margin: 0;
                    }

                    @include breakpoint('m') {
                        font-size: 1.2em;
                    }
                }
            }
        }
    }
</style>
