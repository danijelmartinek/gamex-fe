<template>
    <div id="section-2">
        <div class="games-heading">
            <h1>Games</h1>
            <p>
                Gaming has never been easier! No downloads, play in your
                browser! Check out all the games we have in store for you.
            </p>
        </div>

        <div class="games-menu">
            <ul>
                <li>Popular</li>
                <li>Recomended</li>
                <li>Free</li>
                <li>All</li>
            </ul>
        </div>

        <div class="flex justify-left mt-8 z-50 games-menu-mobile">
            <!-- This empty div is only for demo purposes and it's used so you can close the menu on a touchscreen device. Normally you'd handle it differently by not using hover states on mobile, but by using real clicks. -->
            <div class="fixed" @click="isVisible = false"></div>

            <div
                class="relative inline-block"
                @click="isVisible = !isVisible"
                @keydown.enter="isVisible = !isVisible"
            >
                <button
                    type="button"
                    class="inline-flex items-center justify-between px-2 py-1 transition-all duration-500 focus:outline-none focus:text-brand-900 sm:focus:shadow-outline"
                >
                    <span
                        class="flex-shrink-0"
                        style="text-transform: uppercase; font-weight: bold;"
                        >Popular</span
                    >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="flex-shrink-0 w-5 h-5 ml-1"
                    >
                        <path
                            :class="{ 'rotate-180': isVisible }"
                            class="transition duration-300 ease-in-out origin-center transform"
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <transition
                    enter-active-class="transition duration-300 ease-out transform"
                    enter-class="-translate-y-3 scale-95 opacity-0"
                    enter-to-class="translate-y-0 scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-class="translate-y-0 opacity-100"
                    leave-to-class="-translate-y-3 opacity-0"
                >
                    <div v-show="isVisible" class="absolute pt-2">
                        <div
                            class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl"
                        >
                            <div
                                class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
                            ></div>
                            <div class="relative">
                                <a
                                    href="#"
                                    class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                                    >Recomended</a
                                >
                                <a
                                    href="#"
                                    class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                                    >Free</a
                                >
                                <a
                                    href="#"
                                    class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                                    >All</a
                                >
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <div class="games-grid">
            <router-link
                v-for="(game, i) in gameGridItems"
                :key="game.img + i"
                tag="div"
                :to="game.url"
                class="g-grid-item"
            >
                <img :src="game.img" :alt="game.title" />
                <div class="game-caption">
                    <p>{{ game.title }}</p>
                </div>
            </router-link>
        </div>
        <button class="load-more-btn">Load more</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from '@vue/composition-api';
    import { EnumGameGridItem } from '@/utils/interfaces/homePage.ts';

    export default defineComponent({
        setup() {
            const gameGridItems = reactive([ref<EnumGameGridItem>({})]);
            const isVisible = ref<boolean>(false);

            //test images
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
                'wallpaper_wasteland_remastered_01_2560x1440.jpg',
                'wallpaper_the_witcher_3_wild_hunt_32_2560x1440.jpg',
                'wallpaper_the_elder_scrolls_online_greymoor_01_2560x1440.jpg',
                'wallpaper_the_elder_scrolls_online_greymoor_01_2560x1440.jpg'
            ];

            (() => {
                for (let i = 0; i < 24; i++) {
                    gameGridItems[i] = {
                        img: `https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=${gameWallArray[i]}&height=225&width=400&fill-to-fit`,
                        title: 'Grand Theft Auto: San Adnreas',
                        url: '/game/blabla',
                        platform: 'Steam'
                    };
                }
            })();

            return {
                gameGridItems,
                isVisible
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../../styles/reset.scss';
    @import './../../styles/breakpoints.scss';

    $nav-height: 10vh;

    #section-2 {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        align-items: center;
        justify-items: center;
        background-color: rgb(14, 14, 14);
        padding-bottom: 1em;

        .games-heading {
            max-width: 1520px;
            padding: 2em;
            color: white;

            h1 {
                font-size: 1.5em;
                text-align: center;
                text-transform: uppercase;
            }

            @include breakpoint('s') {
                font-size: 1.2em;
            }

            @include breakpoint('m') {
                font-size: 1.5em;
            }

            p {
                font-size: 0.8em;
                text-align: center;
                max-width: 90%;
                margin: 0 auto;

                @include breakpoint('xs') {
                    max-width: 60%;
                }

                @include breakpoint('s') {
                    max-width: 70%;
                }

                @include breakpoint('m') {
                    max-width: 60%;
                }
            }
        }

        .games-menu {
            display: none;
            width: 100%;
            max-width: 1680px;
            text-align: left;

            @include breakpoint('s') {
                display: initial;
            }

            ul {
                font-size: 1em;
                display: flex;
                flex-direction: row;
                padding: 1em;

                @include breakpoint('m') {
                    font-size: 1.5em;
                    padding: 1em 3em 1em 3em;
                }

                li {
                    text-transform: uppercase;
                    font-weight: bold;
                    list-style: none;

                    padding: 0.2em 0.5em 0.2em 0em;
                    margin-right: 1em;
                    cursor: pointer;

                    &:hover {
                        opacity: 0.5;
                    }
                }
            }
        }

        .games-menu-mobile {
            width: 100%;
            font-size: 1.2em;
            text-transform: uppercase;
            padding: 1em;

            @include breakpoint('s') {
                display: none;
            }
        }

        .games-grid {
            max-width: 1680px;
            display: inline-grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(24, calc(100vw - 2em));
            grid-row-gap: 1em;
            grid-column-gap: 1em;
            align-items: center;
            justify-items: center;
            padding: 1em;

            @include breakpoint('xxs') {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: repeat(12, calc(50vw - 2em));
            }

            @include breakpoint('s') {
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: repeat(8, calc(33.33vw - 2em));
            }

            @include breakpoint('m') {
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: repeat(6, calc(25vw - 2em));
                padding: 1em 4em 1em 4em;
            }

            @include breakpoint('l') {
                grid-template-columns: repeat(6, 1fr);
                grid-template-rows: repeat(4, calc(16.66vw - 2em));
            }

            @include breakpoint('xxl') {
                grid-template-rows: repeat(4, calc(280px - 2em));
            }

            .g-grid-item {
                width: 100%;
                height: 100%;
                position: relative;
                place-self: center;
                text-align: center;
                overflow: hidden;
                border-radius: 5%;
                cursor: pointer;

                img {
                    justify-self: center;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 0.3s ease-out;
                }

                span {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    background-color: rgb(26, 26, 26);
                }

                .game-caption {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    position: absolute;
                    top: 0;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    color: white;
                    opacity: 0;
                    transition: 0.3s ease-out;

                    p {
                        padding: 1em;
                        font-size: 1em;

                        @include breakpoint('xs') {
                            font-size: 1.6em;
                        }
                    }
                }

                &:hover img {
                    transform: scale(1.1);
                }

                &:hover .game-caption {
                    opacity: 1;
                }
            }
        }

        .load-more-btn {
            @include button-reset;

            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.2em;
            margin: 2em;

            &:hover {
                opacity: 0.6;
            }
        }
    }
</style>
