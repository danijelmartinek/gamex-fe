<template>
    <div id="main-footer">
        <div class="main-footer-container">
            <div class="main-footer-section">
                <ul>
                    <h2>About</h2>
                    <li>
                        <router-link to="#">Who we are</router-link>
                    </li>
                    <li>
                        <router-link to="#">Our Tehnology</router-link>
                    </li>
                </ul>
            </div>
            <div class="main-footer-section">
                <ul>
                    <h2>Support</h2>
                    <li>
                        <router-link to="#">FAQ</router-link>
                    </li>
                    <li>
                        <router-link to="#">Help center</router-link>
                    </li>
                    <li>
                        <router-link to="#">support@gamex.i</router-link>
                    </li>
                </ul>
            </div>
            <div class="main-footer-section">
                <ul>
                    <h2>Legal</h2>
                    <li>
                        <router-link to="#">Terms & Conditions</router-link>
                    </li>
                    <li>
                        <router-link to="#">Privacy policy</router-link>
                    </li>
                    <li>
                        <router-link to="#">Cookie</router-link>
                    </li>
                </ul>
            </div>
            <div class="main-footer-section">
                <div class="follow-us-icons">
                    <h2>Follow us</h2>
                    <a
                        v-for="ic in icons"
                        :key="ic.name"
                        :href="ic.link"
                        target="_blank"
                    >
                        <fa-icon
                            class="footer-social-icon"
                            :icon="['fab', ic.icon]"
                        />
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright-container">
            <h4>Copyright © 2020 gamex</h4>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import {
        EnumNavItem,
        EnumFollowUsIcon
    } from '@/utils/interfaces/layout.ts';

    export default defineComponent({
        setup(props, context) {
            const icons: EnumFollowUsIcon[] = [
                {
                    link: 'https://www.instagram.com/',
                    icon: 'instagram'
                },
                {
                    link: 'https://www.youtube.com/',
                    icon: 'youtube'
                },
                {
                    link: 'https://twitter.com/',
                    icon: 'twitter'
                },
                {
                    link: 'https://www.twitch.tv/',
                    icon: 'twitch'
                }
            ];

            return { icons };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../styles/breakpoints.scss';

    $default-text-color: white;

    $footer-height: 15em;
    $footer-link-color: white;
    $footer-link-hover-color: blue;
    $footer-link-active-color: #42b983;
    $footer-background-color: rgb(5, 5, 5);

    #main-footer {
        width: 100%;
        height: 55em;
        position: relative;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        background-color: $footer-background-color;

        @include breakpoint-custom(239px) {
            height: 50em;
        }

        @include breakpoint('xs') {
            height: 30em;
        }

        @include breakpoint('m') {
            height: 20em;
        }

        .main-footer-container {
            width: 100%;
            position: absolute;
            display: flex;
            flex-direction: row;
            align-self: center;
            flex-wrap: wrap;
            padding-bottom: 5em;

            @include breakpoint('l') {
                width: 80%;
                max-width: 1400px;
            }

            .main-footer-section {
                flex: 100%;
                display: flex;
                padding: 1em 0em 1em 2em;

                @include breakpoint('xs') {
                    flex: 50%;
                    padding: 1em 0em 1em 0em;
                }

                @include breakpoint('m') {
                    flex: 1;
                    justify-content: center;
                    padding: 0em;
                }

                ul {
                    @include breakpoint('xs') {
                        padding-left: 2em;
                    }

                    @include breakpoint('m') {
                        padding-left: 0em;
                    }

                    h2 {
                        text-transform: uppercase;
                        padding: 1em 0em 1em 0em;
                        color: $default-text-color;
                    }

                    li {
                        list-style: none;
                        margin: 0.5em 0em 0.5em 0em;

                        a {
                            text-decoration: none;
                            cursor: pointer;
                            color: $footer-link-color;

                            &:visited {
                                color: $footer-link-color;
                            }

                            &:hover {
                                color: $footer-link-hover-color;
                            }

                            &:active {
                                color: $footer-link-active-color;
                            }
                        }
                    }
                }

                .follow-us-icons {
                    @include breakpoint('xs') {
                        padding-left: 2em;
                    }

                    @include breakpoint('m') {
                        padding-left: 0em;
                    }

                    h2 {
                        text-transform: uppercase;
                        padding: 1em 0em 1em 0em;
                        color: $default-text-color;
                    }

                    a {
                        .footer-social-icon {
                            font-size: 1.5em;
                            margin-right: 0.5em;
                            color: $footer-link-color;
                        }

                        &:visited .footer-social-icon {
                            color: $footer-link-color;
                        }

                        &:hover .footer-social-icon {
                            color: $footer-link-hover-color;
                        }

                        &:active .footer-social-icon {
                            color: $footer-link-active-color;
                        }
                    }
                }
            }
        }

        .copyright-container {
            width: 100%;
            height: 4em;
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            background-color: darken($footer-background-color, 10%);

            @include breakpoint('m') {
                justify-content: center;
            }

            h4 {
                padding-left: 2em;

                @include breakpoint('m') {
                    padding-left: 0em;
                }
            }
        }
    }
</style>
