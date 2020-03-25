<template>
    <span>
        <div id="default-nav">
            <span class="app-logo">gaXme</span>
            <span class="default-nav-items">
                <router-link
                    v-for="item in navItems"
                    :to="item.path"
                    :key="item.path"
                    >{{ item.name }}</router-link
                >
            </span>
            <span class="default-nav-actions"></span>
        </div>
        <slot></slot>
    </span>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import EnumNavItem from '@/utils/interfaces/navigation.ts';

    type EnumNavItems = Array<EnumNavItem>;

    export default defineComponent({
        setup(props, context) {
            let navItems: EnumNavItems[] = [];
            const blackListItems: string[] = [];

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

            return { navItems };
        }
    });
</script>

<style lang="scss">
    $nav-height: 8em;
    $nav-item-color: #2c3e50;
    $nav-item-hover-color: blue;
    $nav-item-active-color: #42b983;

    #default-nav {
        height: $nav-height;
        line-height: $nav-height;
        background-color: red;
        display: flex;
        flex-direction: row;

        .app-logo {
            flex: 2;
            text-align: center;
        }

        .default-nav-items {
            flex: 8;

            a {
                padding: 1em;
                font-size: 1.25em;
                font-weight: bold;
                color: $nav-item-color;
                text-decoration: none;
                text-transform: uppercase;

                &:hover {
                    color: $nav-item-hover-color;
                }

                &.router-link-exact-active {
                    color: $nav-item-active-color;
                }
            }
        }

        .default-nav-actions {
            flex: 2;
        }
    }
</style>
