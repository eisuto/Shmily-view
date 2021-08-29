<template>

    <v-main style="width: 600px">
        <v-row>
            <v-col cols="12" md="1">
                <v-btn fab @click="toHome()" elevation="0" width="40px" height="40px">
                    <v-icon dark>
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" md="2">
                <h2 style="margin-top: 3px">推文</h2>
            </v-col>
        </v-row>
        <br>
        <v-divider></v-divider>
        <v-container>
            <div class="container">

            </div>
        </v-container>

    </v-main>
</template>

<script>
    import Vuetify from "vuetify";

    export default {
        vuetify: new Vuetify(),
        name: "ArticleInfo",
        data() {
            return {}
        },
        created() {
        },
        methods: {
            toHome(){
                this.$router.push('/home');
            },
        },
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #eff3f4;
        cursor: pointer;
        transition: 200ms;

        &
        :hover {
            /*background: lighten(#15202b, 2%);*/
            background: #f7f7f7;
        }

        .profileImage {
            margin-right: 5px;
        }

        .tweet {
            width: 100%;

            .tweetDetail {

                span {
                    margin-right: 5px;
                }

                .username,
                .date {
                    color: #8899a6;
                }

                .date:hover {
                    text-decoration: underline;
                }

            }

            .tweetImage {
                margin-top: 5px;

                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 20px;
                    border: 1px solid rgba(#EFF3F4, 0.3);
                }

            }

            .tweetAction {
                display: flex;
                width: 100%;
                margin-top: 7px;

                div {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    border-radius: 50%;
                    width: max-content;

                    svg {
                        padding: 5px;
                        border-radius: 50%;
                        width: 30px;
                        fill: #8899a6;
                        margin-right: 2px;
                    }

                    .actionHover,
                    svg,
                    span {
                        transition: 300ms;
                    }

                    &
                    :hover {

                        .actionHover {
                            padding: 5px;
                            border-radius: 50%;
                        }

                        svg.comment,
                        svg.share {
                            background: rgba(#fb7f26, 0.1);
                            fill: #fb7f26;
                        }

                        span.comment {
                            color: #fb7f26;
                        }

                        svg.rt {
                            background: rgba(#17bf63, 0.1);
                            fill: #17bf63;
                        }

                        span.rt {
                            color: #17bf63;
                        }

                        svg.fav {
                            background: rgba(#e0245e, 0.1);
                            fill: #e0245e;
                        }

                        span.fav {
                            color: #e0245e;
                        }

                    }

                    &
                    .clicked {

                        svg.comment,
                        svg.share {
                            fill: #fb7f26;
                        }

                        span.comment {
                            color: #fb7f26;
                        }

                        svg.rt {
                            fill: #17bf63;
                        }

                        span.rt {
                            color: #17bf63;
                        }

                        svg.fav {
                            fill: #e0245e;
                        }

                        span.fav {
                            color: #e0245e;
                        }

                    }
                }
            }
        }
    }
</style>
