<template>
    <div id="section-1">
        <div class="cta-part">
            <h1 class="cta-text">
                Play any game in your Browser!
                <br />Or rent your PC and earn money online.
            </h1>
            <button>Join now</button>
        </div>
        <div class="x-part">
            <p>X</p>
            <div class="scalein-img-container">
                {{ gameWallpapers }}
                <img
                    v-for="wallpaper in gameWallpapers"
                    :key="wallpaper.src"
                    :src="wallpaper.src"
                    :alt="wallpaper.alt"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        onMounted,
        reactive,
        ref
    } from '@vue/composition-api';
    import { EnumGameWallpaper } from '@/utils/interfaces/homePage.ts';

    export default defineComponent({
        setup() {
            const gameWallpapers = reactive([ref<EnumGameWallpaper>({})]);

            (() => {
                setTimeout(() => {
                    gameWallpapers[0] = {
                        src:
                            'http://getwallpapers.com/wallpaper/full/6/4/d/557743.jpg',
                        alt: 'game'
                    };

                    gameWallpapers[1] = {
                        src:
                            'http://getwallpapers.com/wallpaper/full/6/4/d/557743.jpg',
                        alt: 'game'
                    };
                }, 500);
            })();

            return {
                gameWallpapers
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../../styles/reset.scss';

    $nav-height: 8em;

    #section-1 {
        height: calc(100vh - #{$nav-height});
        width: 100%;

        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        justify-items: center;

        .cta-part {
            width: 80%;

            h1 {
                font-size: 3em;
                margin-bottom: 1em;
            }

            button {
                @include button-reset;

                font-size: 1.5em;
                padding: 1em 2em 1em 2em;
                border-radius: 0.2em;
                background-color: red;
            }
        }

        .x-part {
            height: 100%;
            width: 100%;
            position: relative;

            p {
                position: absolute;
                font-size: 25em;
                opacity: 1;
                animation: x-anim 2s ease-out;

                @keyframes x-anim {
                    from {
                        opacity: 0;
                        transform: scale(0.1);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            }
            .scalein-img-container {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;

                img {
                    width: 16em;
                    height: 9em;
                    position: absolute;
                    object-fit: cover;
                    animation: img-anim 2s ease-out;

                    @keyframes img-anim {
                        from {
                            opacity: 0;
                            transform: scale(0.1);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    &:nth-of-type(1) {
                        left: 20%;
                        top: 10%;
                    }

                    &:nth-of-type(2) {
                        left: 60%;
                        top: 50%;
                    }
                    &:nth-of-type(3) {
                        left: 30%;
                        top: 30%;
                    }
                }
            }
        }
    }
</style>
