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
            <p>
                <span
                    ><img
                        :src="require('@/assets/img/logo/logo.svg')"
                        alt="GameX logo"
                        width="100%"
                /></span>
            </p>
            <div class="scalein-img-container">
                <img
                    v-for="(wallpaper, index) in gameWallpapers"
                    :key="index"
                    :src="wallpaper.src"
                    :alt="wallpaper.alt"
                    class="scalein-img"
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
    import anime from 'animejs/lib/anime.es.js';

    export default defineComponent({
        setup() {
            const gameWallpapers = reactive([ref<EnumGameWallpaper>({})]);
            const gameWallArray: string[] = [
                'wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg',
                'wallpaper_doom_eternal_16_2560x1440.jpg',
                'wallpaper_call_of_duty_ww2_02_2560x1440.jpg',
                'wallpaper_grand_theft_auto_5_02_2560x1440.jpg',
                'wallpaper_the_elder_scrolls_legends_04_2560x1440.jpg',
                'wallpaper_the_cycle_01_2560x1440.jpg',
                'wallpaper_halo_infinite_04_2560x1440.jpg',
                'wallpaper_wasteland_remastered_01_2560x1440.jpg',
                'wallpaper_the_witcher_3_wild_hunt_32_2560x1440.jpg',
                'wallpaper_the_elder_scrolls_online_greymoor_01_2560x1440.jpg',
                'wallpaper_star_citizen_78_2560x1440.jpg',
                'wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg'
            ];
            const scaleAnimationEnabled = true;
            let landingAnimation = anime.timeline({
                autoplay: true,
                scale: [0.2, 1],
                opacity: [0, 1],
                easing: 'easeInOutSine',
                duration: 1000
            });

            (() => {
                for (let i = 0; i < 12; i++) {
                    gameWallpapers[i] = {
                        src: `https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=${gameWallArray[i]}&height=225&width=400&fill-to-fit`,
                        alt: 'game'
                    };
                }
            })();

            onMounted(() => {
                for (let i = 12; i > 0; i--) {
                    if (i === 12) {
                        landingAnimation = landingAnimation.add({
                            targets: `.scalein-img:nth-of-type(${i})`,
                            delay: 1000,
                            scale: [0.2, 1],
                            opacity: [0, 1],
                            easing: 'easeInOutSine'
                        });
                    } else {
                        landingAnimation = landingAnimation.add(
                            {
                                targets: `.scalein-img:nth-of-type(${i})`,
                                scale: [0.2, 1],
                                opacity: [0, 1],
                                easing: 'easeInOutSine'
                            },
                            '-=900'
                        );
                    }
                }
            });

            return {
                gameWallpapers,
                scaleAnimationEnabled
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../../styles/reset.scss';
    @import './../../styles/breakpoints.scss';

    $nav-height: 10vh;

    #section-1 {
        height: calc(100vh - #{$nav-height});
        width: 100%;

        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 60% 30%;
        align-items: center;
        justify-items: center;
        background-color: rgb(14, 14, 14);

        @include breakpoint('m') {
            grid-template-columns: 50% 50%;
            grid-template-rows: 100%;
        }

        .cta-part {
            width: 80%;
            order: 2;

            @include breakpoint('m') {
                order: 1;
            }

            h1 {
                font-size: 1.2em;
                margin-bottom: 1em;
                color: white;

                @include breakpoint('xs') {
                    font-size: 2em;
                }

                @include breakpoint('m') {
                    font-size: 3em;
                }
            }

            button {
                @include button-reset;

                font-size: 0.8em;
                padding: 1em 2em 1em 2em;
                border-radius: 0.2em;
                background-color: rgb(255, 123, 0);

                @include breakpoint('s') {
                    font-size: 1em;
                }

                @include breakpoint('m') {
                    font-size: 1.2em;
                }
            }
        }

        .x-part {
            height: 100%;
            max-height: 720px;
            width: 100%;
            position: relative;
            order: 1;

            @include breakpoint('m') {
                order: 2;
            }

            p {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: white;
                z-index: 500;

                @include breakpoint('s') {
                    font-size: 15em;
                }

                @include breakpoint('m') {
                    font-size: 20em;
                }

                @include breakpoint('l') {
                    font-size: 25em;
                }

                span {
                    display: block;
                    transform: scale(1);

                    img {
                        animation: x-anim 2s ease-out;

                        @keyframes x-anim {
                            from {
                                opacity: 0;
                                transform: scale(0.1) rotate(360deg);
                            }
                            to {
                                opacity: 1;
                                transform: scale(1) rotate(0deg);
                            }
                        }
                    }
                }
            }
            .scalein-img-container {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;

                .scalein-img {
                    width: 32%;
                    max-width: 280px;
                    position: absolute;
                    object-fit: cover;
                    z-index: 250;
                    box-shadow: 0 4px 8px 0 #00000066,
                        0 6px 20px 0 rgba(0, 0, 0, 0.6);
                    border-radius: 0.5em;

                    &:nth-of-type(1) {
                        left: 8%;
                        top: 25%;
                    }

                    &:nth-of-type(2) {
                        left: 62%;
                        top: 49%;
                    }

                    &:nth-of-type(3) {
                        left: 28%;
                        top: 28%;
                    }

                    &:nth-of-type(4) {
                        left: 54%;
                        top: 63%;
                    }

                    &:nth-of-type(5) {
                        left: 5%;
                        top: 50%;
                    }

                    &:nth-of-type(6) {
                        left: 65%;
                        top: 25%;
                    }

                    &:nth-of-type(7) {
                        left: 19%;
                        top: 42%;
                    }

                    &:nth-of-type(8) {
                        left: 22%;
                        top: 66%;
                    }

                    &:nth-of-type(9) {
                        left: 54%;
                        top: 39%;
                    }

                    &:nth-of-type(10) {
                        left: 37%;
                        top: 12%;
                    }

                    &:nth-of-type(11) {
                        left: 32%;
                        top: 56%;
                    }

                    &:nth-of-type(12) {
                        left: 58%;
                        top: 19%;
                    }
                }
            }
        }
    }
</style>
