<template>
    <div id="rent-pc-section-1">
        <div class="rent-pc-heading">
            <h1>Rent your PC Hardware</h1>
            <p>
                Earning money has never been easier! Download our app and
                connect your machine to our server. Earn up to 700$ per month!
            </p>
        </div>
        <div class="download-button">
            <button>Download</button>
        </div>
        <br />
        <div class="rent-pc-hiw">
            <h1>How it works</h1>
            <div>
                <div>
                    <h2>1. Log in</h2>
                    <p>Download and Sign up to our hosting service for free.</p>
                    <img src="https://via.placeholder.com/500" alt="." />
                </div>
                <div>
                    <h2>2. Set available hours</h2>
                    <p>
                        Set hours that you will be able to provide your PC for.
                    </p>
                    <img src="https://via.placeholder.com/500" alt="." />
                </div>
                <div>
                    <h2>3. Get paid</h2>
                    <p>
                        Collect money after user is finished with it's session.
                    </p>
                    <img src="https://via.placeholder.com/500" alt="." />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './../../styles/reset.scss';
    @import './../../styles/breakpoints.scss';

    #rent-pc-section-1 {
        width: 100vw;
        text-align: center;
        background-color: rgb(14, 14, 14);
        color: white;

        .rent-pc-heading {
            max-width: 1520px;
            padding: 2em 0em 1em 0em;
            margin: 0 auto;

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

        .download-button {
            width: 100%;
            text-align: center;

            button {
                @include button-reset;

                width: calc(100% - 2em);
                font-size: 0.8em;
                padding: 1em 2em 1em 2em;
                border-radius: 0.2em;
                background-color: rgb(255, 123, 0);

                @include breakpoint('xxs') {
                    font-size: 1em;
                    width: initial;
                    margin: 0;
                }

                @include breakpoint('m') {
                    font-size: 1.2em;
                }
            }
        }

        .rent-pc-hiw {
            max-width: 1520px;
            padding: 2em 0em 1em 0em;
            margin: 0 auto;

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

            div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                max-width: 1680px;

                div {
                    display: flex;
                    flex-direction: column;
                    flex: 0 0 100%;
                    padding: 0.5em;

                    @include breakpoint('s') {
                        flex: 1;
                        padding: 1em;
                    }

                    h2 {
                        text-transform: uppercase;

                        @include breakpoint('s') {
                            height: 3em;
                        }

                        @include breakpoint('l') {
                            height: 2em;
                        }
                    }

                    p {
                        font-size: 0.8em;
                        max-width: 70%;
                        margin: 0 auto;
                        padding-bottom: 1em;

                        @include breakpoint('s') {
                            height: 5em;
                        }

                        @include breakpoint('l') {
                            height: 3.5em;
                        }
                    }

                    img {
                        width: 60%;
                        height: auto;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
</style>
