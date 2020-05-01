<template>
    <div class="content-container">
        <!-- transition-delay -> to prevent (white) animation gap -->
        <div
            class="menu dm-sidebar"
            :class="{ 'dm-sidebar-open': mobileNavActive }"
            :style="{ 'transition-delay': mobileNavActive ? '0s' : '0.02s' }"
        >
            <slot name="sidebar">
                <span>Unknown sidebar</span>
            </slot>
        </div>

        <div
            class="content"
            :style="{ 'transition-delay': mobileNavActive ? '0.02s' : '0s' }"
        >
            <button
                @click="mobileNavActive = !mobileNavActive"
                style="width: 100%;"
            >
                toggle menu
            </button>
            <slot>
                <span>Unknown content</span>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from '@vue/composition-api';

    export default defineComponent({
        setup() {
            const mobileNavActive: boolean = ref(false);

            return { mobileNavActive };
        }
    });
</script>

<style lang="scss" scoped>
    @import './../styles/breakpoints.scss';

    .content-container {
        width: 100vw;
        height: 100vh;
        position: fixed;

        .dm-sidebar {
            position: fixed;
            left: 0;
            width: 100%;
            height: 100%;
            transform: translate3d(-105%, 0, 0);
            transition: all 0.2s ease-in-out;
            overflow: scroll;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
            // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            background-color: red;
            z-index: 9999;

            @include breakpoint('xxs') {
                width: 250px;
                transform: translate3d(-260px, 0, 0);
            }

            @include breakpoint('xs') {
                width: 300px;
                transform: translate3d(-310px, 0, 0);
            }

            @include breakpoint('s') {
                width: 350px;
                transform: translate3d(-350px, 0, 0);
            }

            &.dm-sidebar-open {
                transform: translate3d(0, 0, 0);

                @include breakpoint('s') {
                    transform: translate3d(0, 0, 0);
                    width: 350px;
                }
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .content {
            position: fixed;
            width: 100%;
            height: 100%;
            transition: all 200ms ease-in-out;
            transition-delay: 0.02s;
            overflow: auto;
            background-color: blue;
        }

        .dm-sidebar-open + .content {
            transform: translate3d(100%, 0, 0);

            @include breakpoint('xxs') {
                transform: translate3d(250px, 0, 0);
            }

            @include breakpoint('xs') {
                transform: translate3d(300px, 0, 0);
            }

            @include breakpoint('s') {
                transform: translate3d(350px, 0, 0);
            }
        }
    }
</style>
