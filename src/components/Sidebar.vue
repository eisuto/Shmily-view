<template>
    <div class="app">
        <div class="container">
            <router-link tag="div" to="/" class="logo hover">
                <!--        <icon name="twitter" />-->
            </router-link>
            <nav>
                <router-link tag="a" to="/home">
                    <div class="linkBox homeIcon">
                        <icon name="home" v-if="$route.name != 'home'"/>
                        <icon name="homeFill" class="active" v-else/>
                        <CustomText font="xlarge fw-bold">主页</CustomText>
                    </div>
                </router-link>
                <router-link to="/explore" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="explore"/>
                        <CustomText font="xlarge fw-bold">探索</CustomText>
                    </div>
                </router-link>
                <router-link to="/notifications" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="notification" v-if="$route.name != 'notifications'"/>
                        <icon name="notificationFill" v-else/>
                        <CustomText font="xlarge fw-bold">通知</CustomText>
                    </div>
                </router-link>
                <router-link to="/messages" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="message" v-if="$route.name != 'messages'"/>
                        <icon name="messageFill" v-else/>
                        <CustomText font="xlarge fw-bold">私信</CustomText>
                    </div>
                </router-link>
                <router-link to="/bookmarks" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="bookmarks" v-if="$route.name != 'bookmarks'"/>
                        <icon name="bookmarksFill" v-else/>
                        <CustomText font="xlarge fw-bold">书签</CustomText>
                    </div>
                </router-link>
                <router-link to="/lists" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="list" v-if="$route.name != 'lists'"/>
                        <icon name="listFill" v-else/>
                        <CustomText font="xlarge fw-bold">列表</CustomText>
                    </div>
                </router-link>
                <router-link to="profile" tag="a" active-class="active">
                    <div class="linkBox">
                        <icon name="user" v-if="$route.name != 'profile'"/>
                        <icon name="userFill" v-else/>
                        <CustomText font="xlarge fw-bold">个人资料</CustomText>
                    </div>
                </router-link>
                <a>
                    <div class="linkBox">
                        <icon name="more"/>
                        <CustomText font="xlarge fw-bold">更多</CustomText>
                    </div>
                </a>
            </nav>
            <div @click="toSend()">
                <CustomButton  class="modalTweetButton">
                    <CustomText font="fw-bold" >发文</CustomText>
                    <svg viewBox="0 0 24 24" class="tweetSidebar">
                        <g>
                            <path
                                    d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
                            ></path>
                        </g>
                    </svg>
                </CustomButton>
            </div>

            <div class="user"  @click="toSpace()">
                <div class="userBox">
                    <Avatar/>
                    <div class="userDetail" >
                        <CustomText tag="p" font="fw-bold">{{userInfo.nikeName}}</CustomText>
                        <CustomText tag="p" font="large" class="username"
                        >@{{userInfo.nikeName}}
                        </CustomText
                        >
                    </div>
                </div>
                <icon name="down" class="downIcon"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomText from "@/components/CustomText";
    import CustomButton from "@/components/CustomButton";
    import Avatar from "@/components/Avatar";

    export default {
        name: "Sidebar.vue",
        components: {
            Avatar,
            CustomButton,
            CustomText
        },
        data: () => ({
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
        }),
        methods:{
            toSend(){
                scrollTo(0,0);
                this.$router.push('/home');
            },
            toSpace(){
                this.$router.push('/profile');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .app {
        height: 100vh;
        width: 350px;
        z-index: 55;

        .container {
            /*background: #15202b;*/
            background: #fff;
            width: 273px;
            height: 100%;
            border-right: 1px solid #EFF3F4;
            position: fixed;

            * svg {
                fill: #000;
            }

            .logo {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin: 2px 0 0 2px;
                padding: 10px;
                border-radius: 50%;

                svg {
                    width: 30px;
                }
            }

            nav {
                a {
                    display: flex;
                    align-items: center;
                    height: 60px;
                    cursor: pointer;

                    &:first-child {
                        margin-top: 2px;
                    }

                    .linkBox {
                        display: inline-flex;
                        align-items: center;
                        padding: 10px 25px 10px 12px;
                        border-radius: 99px;
                        transition: background 300ms;

                        svg {
                            width: 27px;
                            margin-right: 20px;

                            &.active + span {
                                color: #fb7f26;
                            }
                        }
                    }

                    &.active {
                        * {
                            color: #fb7f26;
                            fill: #fb7f26;
                        }
                    }

                    &:hover,
                    .hover {
                        .linkBox {
                            color: #fb7f26;
                            background: rgba(255, 233, 199, 0.62);
                        }

                        svg {
                            fill: #fb7f26;
                        }
                    }
                }
            }

            .modalTweetButton {
                margin-top: 23px;
                margin-left: 3px;
                padding: 16px 93px;
                letter-spacing: 0.3px;

                svg {
                    display: none;
                }
            }

            .user {
                position: absolute;
                bottom: 10px;
                right: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 260px;
                border-radius: 99px;
                padding: 8px 10px;
                cursor: pointer;
                transition: 300ms;

                &:hover {
                    background: #F7F7F7;
                }

                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 2;
                    border-radius: 99px;
                }

                svg {
                    width: 20px;
                }

                .userBox {
                    display: flex;
                    align-items: center;

                    .userDetail {
                        margin-left: 10px;

                        p.username {
                            color: #8899a6;
                        }
                    }
                }
            }
        }

        .homeIcon {
            position: relative;

            &::before {
                content: "";
                position: absolute;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                top: 7px;
                left: 32px;
                background: #fb7f26;
            }
        }
    }

    @media (max-width: 1290px) {
        .app {
            min-width: 78px;
            max-width: 78px;
        }
        .user {
            max-width: max-content;

            .userDetail,
            .downIcon {
                display: none;
            }
        }
        .container {
            width: max-content !important;
            padding: 0 10px;
        }
        nav {
            a {
                span {
                    display: none;
                }

                .linkBox {
                    padding: 12px !important;
                    border-radius: 50%;

                    svg {
                        margin: 0 !important;
                    }
                }
            }
        }
        .modalTweetButton {
            padding: 14px !important;
            border-radius: 50% !important;

            span {
                display: none !important;
            }

            .tweetSidebar {
                display: block !important;
                width: 25px;
                height: 25px;
                fill: white;
            }
        }
    }
</style>
