<template>
    <div id="section-2">
        <div class="games-heading">
            <h1>Games</h1>
            <p>Enjoy the most popular gaming titles</p>
        </div>
        <div class="games-grid">
            <router-link
                v-for="game in gameGridItems"
                :key="game.img"
                tag="div"
                :to="game.url"
                class="g-grid-item"
            >
                <img :src="game.img" :alt="game.title" />
                <div class="game-caption">
                    <p>{{ game.title }}</p>
                </div>
            </router-link>

            <router-link tag="div" to="#section-1" class="g-grid-item">
                <span><div class="more-games">Explore more</div></span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref } from '@vue/composition-api';
    import { EnumGameGridItem } from '@/utils/interfaces/homePage.ts';

    export default defineComponent({
        setup() {
            const gameGridItems = reactive([ref<EnumGameGridItem>({})]);
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
                'wallpaper_star_citizen_78_2560x1440.jpg'
            ];

            (() => {
                for (let i = 0; i < 11; i++) {
                    gameGridItems[i] = {
                        img: `https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=${gameWallArray[i]}&height=225&width=400&fill-to-fit`,
                        title: 'Grand Theft Auto: San Adnreas',
                        url: '/game/blabla',
                        platform: 'Steam'
                    };
                }
            })();

            return {
                gameGridItems
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

        .games-heading {
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

            p {
                font-size: 1em;
                text-align: center;
            }
        }

        .games-grid {
            max-width: 1680px;
            display: inline-grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(12, calc(100vw - 2em));
            grid-row-gap: 1em;
            grid-column-gap: 1em;
            align-items: center;
            justify-items: center;
            padding: 1em;

            @include breakpoint('xxs') {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: repeat(6, calc(50vw - 2em));
            }

            @include breakpoint('s') {
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: repeat(4, calc(33.33vw - 2em));
            }

            @include breakpoint('m') {
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: repeat(3, calc(25vw - 2em));
                padding: 1em 4em 1em 4em;
            }

            @include breakpoint('l') {
                grid-template-columns: repeat(6, 1fr);
                grid-template-rows: repeat(2, calc(16.66vw - 2em));
            }

            @include breakpoint('xxl') {
                grid-template-rows: repeat(2, calc(280px - 2em));
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

                    .more-games {
                        width: 75%;
                        height: 75%;
                        font-size: 1.2em;
                        color: white;
                        text-transform: uppercase;
                        display: grid;
                        justify-items: center;
                        align-items: center;
                        padding: 0.5em;
                        border: 2px solid white;
                        border-radius: 2%;
                        transition: 0.3s ease-out;

                        &:hover {
                            transform: scale(0.9);
                        }
                    }
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
    }
</style>
