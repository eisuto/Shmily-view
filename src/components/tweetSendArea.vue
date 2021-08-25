<template>
    <div class="container">
        <div class="profile">
            <Avatar size="large"/>
        </div>
        <div class="tweetContent">
            <label>
                <textarea
                        @click="clickedTextArea = true"
                        v-model="article.info"
                        placeholder="有什么新鲜事?"
                ></textarea>
            </label>
            <div class="whoCanSee" v-if="clickedTextArea === true">
                <icon name="earth"/>
                <CustomText font="fw-bold small">所有人可见</CustomText>
            </div>
            <div class="actions">
                <div class="list">
                    <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            style="display: none"
                    />
                    <div class="action hover">
                        <label for="imageInput">
                            <icon name="gallery"/>
                        </label>
                    </div>
                    <input
                            type="file"
                            id="gifInput"
                            accept="image/gif"
                            style="display: none"
                    />
                    <div class="action hover">
                        <label for="gifInput">
                            <icon name="gif"/>
                        </label>
                    </div>
                    <div class="action hover">
                        <icon name="statistics"/>
                    </div>
                    <div class="action hover">
                        <icon name="emoji"/>
                    </div>
                    <div class="action hover">
                        <icon name="date"/>
                    </div>
                </div>
                <div class="sendTweet">
                    <v-btn
                            elevation="0"
                            color="#fb7f26"
                            dark
                            rounded
                            :disabled="article.info.length <= 0"
                            style="font-weight: bolder"
                            @click="sendArticle()"
                    >发推</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "@/components/Avatar";
    import CustomText from "@/components/CustomText";
    import CustomButton from "@/components/CustomButton";
    import Vuetify from "vuetify";
    import {
        send
    }from "../js/article"
    import {login} from "../js/user";
    export default {
        name: "tweetSendArea",
        vuetify: new Vuetify(),
        data() {
            return {
                clickedTextArea: false,
                article:{
                    info:'',
                    userId:JSON.parse(sessionStorage.getItem("userInfo")).id,
                },
            };
        },
        methods: {
            sendArticle(){
                send(this.article).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            location.reload();
                            console.log(data)
                        } else {
                            console.log(data.msg)
                        }
                    }
                )
                console.log(this.article)
            }
        },
        components: {CustomButton, CustomText, Avatar}
    };
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        min-height: 118px;
        max-height: 160px;
        padding: 10px;

        .profile {
            float: left;
            height: 100%;
            width: 50px;
            margin-right: 10px;
        }

        .tweetContent {
            display: flex;
            flex-direction: column;

            textarea {
                margin-top: 5px;
                background: none;
                resize: none;
                border: none;
                font-size: 20px;
                color: #000;
                outline: none;
                width: 100%;
                height: 44px;
                padding: 5px;

                &::placeholder {
                    color: #8899a6;
                }
            }

            .whoCanSee {
                margin-top: 4px;
                display: flex;
                align-items: center;
                padding: 0 5px 15px 5px;
                border-bottom: 1px solid #EFF3F4;
                color: #fb7f26;
                cursor: pointer;

                svg {
                    width: 20px;
                    fill: #fb7f26;
                    margin-right: 5px;
                }
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 10px 10px 0;

                .list {
                    display: flex;

                    .action {
                        padding: 10px;
                        border-radius: 50%;

                        label {
                            display: flex;
                        }

                        svg {
                            fill: #fb7f26;
                            width: 22px;
                            cursor: pointer;
                        }
                    }
                }

                .sendTweet {
                    button {
                        padding: 10px 17px;
                    }
                }
            }
        }
    }
</style>
