<template>
    <span id="main-layout">
        <div id="main-nav">
            <span class="app-logo">gaXme</span>
            <span class="main-nav-items">
                <!-- <router-link
                    v-for="item in navItems"
                    :to="item.path"
                    :key="item.path"
                    >{{ item.name }}</router-link
                > -->
            </span>
            <span class="main-nav-actions"></span>
        </div>
        <div style="height: 2000px">
            <slot></slot>
        </div>
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
                        <li><router-link to="#">FAQ</router-link></li>
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
                            <icon
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
    </span>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import {
        EnumNavItem,
        EnumFollowUsIcon
    } from '@/utils/interfaces/layout.ts';

    export default defineComponent({
        setup(props, context) {
            let navItems: EnumNavItem[] = [];
            const blackListItems: string[] = [];
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

            navItems = (context.root.$router as any).options.routes
                .map(
                    (x: any): EnumNavItem => {
                        return {
                            path: x.path,
                            name: x.name
                        };
                    }
                )
                .filter((y: any): boolean => !blackListItems.includes(y.name));

            return { navItems, icons };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../styles/breakpoints.scss';

    $default-text-color: #2c3e50;

    $nav-height: 10vh;
    $nav-item-color: #356596;
    $nav-item-hover-color: blue;
    $nav-item-active-color: #42b983;
    $nav-background-color: rgb(5, 5, 5);

    $footer-height: 15em;
    $footer-link-color: #2c3e50;
    $footer-link-hover-color: blue;
    $footer-link-active-color: #42b983;
    $footer-background-color: cyan;

    #main-layout {
        color: $footer-link-color;

        #main-nav {
            height: $nav-height;
            line-height: $nav-height;
            display: flex;
            flex-direction: row;
            background-color: $nav-background-color;

            .app-logo {
                flex: 2;
                text-align: center;
            }

            .main-nav-items {
                flex: 8;

                a {
                    font-size: 1.25em;
                    font-weight: bold;
                    color: $nav-item-color;
                    text-decoration: none;
                    text-transform: uppercase;
                    padding: 1em;

                    &:hover {
                        color: $nav-item-hover-color;
                    }

                    &.router-link-exact-active {
                        color: $nav-item-active-color;
                    }
                }
            }

            .main-nav-actions {
                flex: 2;
            }
        }

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
                                padding: 0.5em 1em 0.5em 0em;
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
    }
</style>
