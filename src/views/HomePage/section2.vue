<template>
    <div id="section-2">
        <div class="games-heading">
            <h1>Games</h1>
            <p>Enjoy the most popular gaming titles</p>
        </div>
        <div class="games-grid">
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_the_elder_scrolls_online_harrowstorm_01_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <img
                    src="https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_modern_warfare_02_2560x1440.jpg&height=225&width=400&fill-to-fit"
                    alt="game"
                />
            </router-link>
            <router-link tag="div" to="#section-1" class="g-grid-item">
                <span><div class="more-games">Explore more</div></span>
            </router-link>
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
            grid-gap: 1em;
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

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                span {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    background-color: purple;

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
            }
        }
    }
</style>
