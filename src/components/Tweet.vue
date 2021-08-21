<template>
    <div>
        <div class="container" v-for="tweet in tweetData" :key="tweet.id">
            <div class="profileImage">
                <Avatar size="large" :image="tweet.avatarUrl"/>
            </div>
            <div class="tweet">
                <div class="tweetDetail">
                    <CustomText tag="span" class="name" font="fw-bold">{{
                        tweet.nikeName
                        }}
                    </CustomText>
                    <!--                    <CustomText class="username">@{{ tweet.username }}</CustomText>-->
                    <CustomText class="date">{{ tweet.createTime.substr(0,16) }}</CustomText>
                </div>
                <div class="tweetText" style="margin-top: 3px">
                    <CustomText font="large">{{ tweet.info }}</CustomText>
                </div>
                <!--                <div class="tweetImage" v-if="tweet.img.length > 3">-->
                <!--                    <img :src="tweet.img" alt=""/>-->
                <!--                </div>-->
                <div class="tweetAction">
                    <div>
                        <icon class="actionHover comment" name="comment"/>
                        <CustomText class="comment">{{
                            tweet.commentNum
                            }}
                        </CustomText>
                    </div>
                    <div>
                        <icon class="actionHover rt" name="rt"/>
                        <CustomText class="rt">{{
                            tweet.transpondNum
                            }}
                        </CustomText>
                    </div>
                    <div @click="like(tweet.id)">

                        <icon   class="actionHover fav"  name="fav"/>
                        <CustomText
                                class="fav"
                        >{{ tweet.loveNum }}
                        </CustomText
                        >
                    </div>
                    <div>
                        <icon class="actionHover share" name="share"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "@/components/Avatar";
    import CustomText from "@/components/CustomText";
    import {follows, like} from "../js/article"
    import {register} from "../js/user";

    export default {
        name: "Tweet",
        data() {
            return {
                // tweetData: [
                //     {
                //         id: 1,
                //         avatarUrl:
                //             "https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png",
                //         img: "",
                //         nikeName: "WangXiang",
                //         date: "2h",
                //         info: "See how math I love you.",
                //         commentNum: "125",
                //         loveNum: "964",
                //         transpondNum: "221"
                //     },
                //     {
                //         id: 4,
                //         avatarUrl:
                //             "https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png",
                //         img:
                //             "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
                //         nikeName: "李佳奇",
                //         date: "2d",
                //         info: "分享美图",
                //         commentNum: "4",
                //         loveNum: "86",
                //         transpondNum: "8"
                //     }
                // ],
                tweetData: [],
            };
        },
        created() {
            this.getArticles();
        },
        methods: {
            like(id){
                like({id: id,userId:JSON.parse(sessionStorage.getItem("userInfo")).id}).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.getArticles();
                        } else {
                            console.log(res.msg)
                        }
                    }
                );
            },
            getArticles() {
                follows({id: JSON.parse(sessionStorage.getItem("userInfo")).id}).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.tweetData = data.data;
                        } else {
                            console.log(res.msg)
                        }
                    }
                );
            }
        },
        components: {CustomText, Avatar}
    };
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #eff3f4;
        cursor: pointer;
        transition: 200ms;

        &:hover {
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

                    &:hover {
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

                    &.clicked {
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
