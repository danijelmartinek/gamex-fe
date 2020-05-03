<template>
    <span id="main-layout">
        <div id="main-nav">
            <span class="app-logo">gaXme</span>
            <span class="main-nav-items">
                <router-link
                    v-for="item in navItems"
                    :to="item.path"
                    :key="item.path"
                    >{{ item.name }}</router-link
                >
            </span>
            <span class="main-nav-hamburger">
                <span @click="mobileNavActive = !mobileNavActive">
                    <fa-icon
                        class="footer-social-icon"
                        :icon="['fa', 'bars']"
                    />
                </span>
            </span>
        </div>

        <mainMobile :mobileNavActive="mobileNavActive">
            <template v-slot:sidebar>
                <div class="mobile-nav-container">
                    <div
                        class="mobile-nav"
                        @click="mobileNavActive = !mobileNavActive"
                    >
                        <router-link
                            v-for="item in navItems"
                            :to="item.path"
                            :key="item.path"
                            >{{ item.name }}</router-link
                        >
                    </div>
                </div>
            </template>

            <template v-slot:default>
                <slot></slot>
                <mainFooter />
            </template>
        </mainMobile>
    </span>
</template>

<script lang="ts">
    import { defineComponent, ref } from '@vue/composition-api';
    import { EnumNavItem } from '@/utils/interfaces/layout.ts';

    import mainMobile from './_main_mobile.vue';
    import mainFooter from './_main_footer.vue';

    export default defineComponent({
        components: {
            mainMobile,
            mainFooter
        },
        setup(props, context) {
            const mobileNavActive = ref<boolean>(false);
            let navItems: EnumNavItem[] = [];
            const blackListItems: string[] = [];
            // const selectedMediaQueries = ref<string>('s');

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

            const addQuery = (query: string, funct: any): void => {
                const x: any = window.matchMedia(query);

                if (x.matches) {
                    funct();
                }

                x.addListener(() => {
                    if (x.matches) {
                        funct();
                    }
                });
            };

            addQuery('(min-width: 992px)', () => {
                mobileNavActive.value = false;
            });

            // addQuery('(min-width: 600px) and (max-width: 900px)', () => {
            //     selectedMediaQueries.value = 'm';
            // });

            // addQuery('(min-width: 900px) and (max-width: 1200px)', () => {
            //     selectedMediaQueries.value = 'l';
            // });

            return { mobileNavActive, navItems };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../styles/breakpoints.scss';

    $default-text-color: white;

    $nav-height: 10vh;
    $nav-item-color: white;
    $nav-item-hover-color: blue;
    $nav-item-active-color: red;
    $nav-background-color: rgb(5, 5, 5);

    $footer-height: 15em;
    $footer-link-color: white;
    $footer-link-hover-color: blue;
    $footer-link-active-color: #42b983;
    $footer-background-color: rgb(5, 5, 5);

    #main-layout {
        color: $footer-link-color;

        #main-nav {
            height: $nav-height;
            line-height: $nav-height;
            display: flex;
            flex-direction: row;
            background-color: $nav-background-color;

            .app-logo {
                flex: 0 0 200px;
                text-align: center;
            }

            .main-nav-items {
                flex: 8;
                display: none;

                @include breakpoint('m') {
                    display: block;
                }

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

            .main-nav-hamburger {
                flex: 1;
                text-align: right;
                margin-right: 2em;

                @include breakpoint('m') {
                    display: none;
                }

                span {
                    font-size: 1.5em;
                    padding: 0.5em;
                    cursor: pointer;

                    &:hover {
                        opacity: 0.75;
                    }

                    &:active {
                        opacity: 0.5;
                    }
                }
            }
        }

        .mobile-nav-container {
            height: 100%;
            width: 100%;
            color: $default-text-color;
            background-color: $nav-background-color;

            .mobile-nav {
                display: flex;
                flex-direction: column;

                a {
                    font-size: 1.5em;
                    text-transform: uppercase;
                    flex: 1;
                    padding: 0.5em;
                    margin: 0.5em;
                    color: $nav-item-color;

                    &:hover {
                        color: $nav-item-hover-color;
                    }

                    &.router-link-exact-active {
                        color: $nav-item-active-color;
                    }
                }
            }
        }
    }
</style>
