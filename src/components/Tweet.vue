<template>
    <v-app>
        <div class="container" v-for="tweet in tweetData" :key="tweet.id">
            <div class="profileImage">
                <Avatar size="large" :image="tweet.avatarUrl"/>
            </div>
            <div class="tweet" >
                <div class="tweetDetail">
                    <CustomText tag="span" class="name" font="fw-bold">{{ tweet.nikeName }}</CustomText>
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
                    <!--评论-->
                    <div @click="commentOpen(tweet)">
                        <icon class="actionHover comment" name="comment"/>
                        <CustomText class="comment">
                            {{ tweet.commentNum }}
                        </CustomText>
                    </div>
                    <!--转发-->
                    <div>
                        <icon class="actionHover rt" name="rt"/>
                        <CustomText class="rt">
                            {{tweet.transpondNum }}
                        </CustomText>
                    </div>
                    <!--点赞-->
                    <div @click="likeArticle(tweet)">
                        <v-icon v-if="tweet.liked" style="font-size: 21px;margin:0px 5px 0 5px" color="#E0245E">
                            mdi-heart
                        </v-icon>
                        <icon v-else class="actionHover fav" name="fav"/>
                        <CustomText class="fav">
                            {{ tweet.loveNum }}
                        </CustomText>
                    </div>
                    <div>
                        <icon class="actionHover share" name="share"/>
                    </div>
                </div>
            </div>
        </div>
        <!--    评论弹出-->
        <v-dialog v-model="commentDialog" width="650">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2"></v-card-title>

                <v-divider></v-divider>
                <div style="padding: 20px">
                    <div class="profileImage" style="display:inline-block !important;width: 50px;margin-right: 15px">
                        <Avatar size="large" :image="thisTweet.avatarUrl"/>
                    </div>
                    <div class="tweetDetail" style="display:inline-block !important; vertical-align:top;">
                        <CustomText tag="span" class="name" font="fw-bold"> {{ thisTweet.nikeName }}</CustomText>
                        <CustomText class="date" style="margin-left: 5px"> {{ thisTweet.createTime.substr(0,16) }}
                        </CustomText>
                    </div>
                    <div class="tweetText" style="position:relative; top:-30px;left:65px;width: 380px">
                        <CustomText font="large">{{ thisTweet.info }}</CustomText>
                    </div>
                    <v-divider></v-divider>
                    <br>
                    <div v-for="item in thisTweet.commentList" :key="item.id">
                        <div class="profileImage" style="display:inline-block !important;width: 50px;margin-right: 15px">
                            <Avatar size="large" :image="item.avatarUrl"/>
                        </div>
                        <div class="tweetDetail" style="display:inline-block !important; vertical-align:top;">
                            <CustomText tag="span" class="name" font="fw-bold"> {{ item.nikeName }}</CustomText>
                            <CustomText class="date" style="margin-left: 5px"> {{ item.createTime.substr(0,16) }}</CustomText>
                        </div>
                        <div class="tweetText" style="position:relative; top:-30px;left:65px;width: 380px">
                            <span style="font-size: 14px;color: #536471">回复 <a>@{{thisTweet.nikeName}}</a></span><br>
                            <CustomText font="large">{{ item.comment }}</CustomText>
                        </div>
                    </div>
                    <v-divider v-if="thisTweet.commentList.length>0"></v-divider>
                    <div style="margin-top: 10px">
                        <v-row>
                            <v-col cols="12" md="1">
                                <v-avatar color="primary" size="50"></v-avatar>
                            </v-col>
                            <v-col cols="12" md="11">
                                <div >
                                    <span style="margin-left: 12px;">
                                        回复 <a href="javascript:">@{{thisTweet.nikeName}}</a>
                                    </span>
                                    <v-textarea
                                            flat
                                            solo
                                            clearable
                                            class="ma-0 pa-0" hide-details
                                            style="font-size: 20px;padding: 0px"
                                            name="input-7-1"
                                            auto-grow
                                            v-model="thisTweet.comment"
                                    ></v-textarea>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-btn  elevation="0"
                                    color="#fb7f26"
                                    dark
                                    @click="commentArticle()"
                                    rounded
                                    style="margin-left: 88%;font-weight: bolder">回复</v-btn>
                        </v-row>
                    </div>

                </div>

            </v-card>
        </v-dialog>
    </v-app>


</template>

<script>
    import Avatar from "@/components/Avatar";
    import CustomText from "@/components/CustomText";
    import {comment, comments, follows, like, unLike} from "../js/article"
    import {register} from "../js/user";
    import Vuetify from "vuetify";

    export default {
        vuetify: new Vuetify(),
        name: "Tweet",
        data() {
            return {
                // 当前推文
                thisTweet: {
                    commentList:[],
                    comment:'',
                    avatarUrl: '',
                    nikeName: '',
                    createTime: '',
                    info: '',
                },
                commentDialog: false,
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
            // 一个推文的全部评论
            commentsArticle(){
                comments({id: this.thisTweet.id,}).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.thisTweet.commentList = data.data;
                            // 弹出
                            this.commentDialog = true;
                        } else {
                            console.log(res.msg)
                        }
                    }
                );
            },
            // 评论
            commentArticle(){
                comment({
                    id: this.thisTweet.id,
                    userId: JSON.parse(sessionStorage.getItem("userInfo")).id,
                    comment:this.thisTweet.comment,
                }).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.thisTweet.comment = '';
                            this.getArticles();
                            this.commentsArticle();
                        } else {
                            console.log(res.msg)
                        }
                    }
                );
            },
            // 评论弹出层
            commentOpen(tweet) {
                this.thisTweet = tweet;
                this.commentsArticle();
            },
            // 点赞
            likeArticle(tweet) {
                // 此推文 点过赞
                if (tweet.liked === 1) {
                    // 取消点赞
                    unLike({id: tweet.id, userId: JSON.parse(sessionStorage.getItem("userInfo")).id}).then(
                        res => {
                            const data = res.data;
                            if (data.code === 200) {
                                this.getArticles();
                            } else {
                                console.log(res.msg)
                            }
                        }
                    );
                }
                //没有点过赞
                else {
                    like({id: tweet.id, userId: JSON.parse(sessionStorage.getItem("userInfo")).id}).then(
                        res => {
                            const data = res.data;
                            if (data.code === 200) {
                                this.getArticles();
                            } else {
                                console.log(res.msg)
                            }
                        }
                    );
                }

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
