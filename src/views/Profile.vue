<template>
    <v-app>
        <v-container class="mains">
            <v-row style="margin-bottom: 5px">
                <v-btn elevation="0" small text fab style="margin: 0px 10px" @click="toBack()">
                    <v-icon>
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
                <h3 style="line-height:40px;font-size: 20px">个人资料</h3>
            </v-row>
            <br>
            <v-divider></v-divider>
            <!--            主页背景-->
            <v-row>
                <v-col>
                    <v-img
                            max-height="220"
                            max-width="100%"
                            :src="userInfo.homeBackUrl"
                    ></v-img>
                </v-col>
            </v-row>
            <!--            头像-->
            <v-row style="height: 80px">
                <v-avatar class="big_avatar"
                          size="150">
                    <img v-if="userInfo.avatarUrl"
                         alt="Avatar"
                         :src="userInfo.avatarUrl">
                </v-avatar>
            </v-row>
            <!--            昵称-->
            <v-row>
                <div style="margin-left: 20px">
                    <h3><b>{{userInfo.nikeName }}</b></h3>
                    <span class="smFont">@{{userInfo.nikeName }}</span>
                </div>
            </v-row>
            <!--            简介-->
            <v-row>
                <v-col md="4" style="margin-left: 10px">
                    <span>{{userInfo.summary}}</span>
                </v-col>
                <v-col md="7">
                    <v-btn
                            style="position: relative;top: -140px;left: 240px"
                            color="primary"
                            outlined
                            elevation="0"
                            rounded
                    >编辑个人资料
                    </v-btn>
                </v-col>
            </v-row>
            <!--                其他信息-->
            <v-row style="margin-top: -20px">
                <v-col v-if="userInfo.country" md="2" style="margin-left: 10px;">
                    <v-icon small>
                        mdi-map-marker
                    </v-icon>
                    <span class="iconFont"> {{userInfo.country}}</span>
                </v-col>
                <v-col v-if="userInfo.createTime" md="4">
                    <v-icon small>
                        mdi-calendar
                    </v-icon>
                    <span class="iconFont"> {{userInfo.createTime.substr(0,10)}} 加入</span>
                </v-col>
            </v-row>
            <!--            选项卡-->
            <v-row>
                <!--                <v-tabs-->
                <!--                        fixed-tabs-->
                <!--                        v-model="tab"-->
                <!--                        background-color="transparent"-->
                <!--                        color="basil"-->
                <!--                        grow-->
                <!--                >-->
                <!--                    <v-tab key="1">文章</v-tab>-->
                <!--                </v-tabs>-->
                <v-tabs grow
                        v-model="tab" color="#fb7f26">
                    <v-tab class="text-body-2 font-weight-bold"> 文章 </v-tab>
                    <v-tab-item>
                        文章
                    </v-tab-item>
                    <v-tab class="text-body-2 font-weight-bold"> 转发和回复 </v-tab>
                    <v-tab-item>
                        转发和回复
                    </v-tab-item>
                    <v-tab class="text-body-2 font-weight-bold"> 喜欢 </v-tab>
                    <v-tab-item>
                        喜欢
                    </v-tab-item>
                </v-tabs>
            </v-row>

        </v-container>


    </v-app>
</template>

<script>
    import Vuetify from "vuetify";

    export default {
        vuetify: new Vuetify(),
        name: "Profile",
        data() {
            return {
                tab: null,
                userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
            }
        },
        created() {

        },
        methods: {
            toBack() {
                this.$router.go(-1)
            }
        },
    };
</script>

<style scoped lang="scss">
    .iconFont {
        line-height: 16px;
        font-size: 14px;
        color: #3A464F;
        font-weight: 400;
    }

    .smFont {
        color: #3A464F;
        font-size: 15px;
        font-weight: 400;
    }

    .big_avatar {
        position: relative;
        top: -80px;
        left: 15px;
        border-color: #FFFFFF !important;
        border-style: solid;
        border-width: 4px;
    }

    .container {
        padding: 0 0 !important;
    }

    .mains {
        padding: 0 0;
        max-width: 590px;
        margin: 0 0;
    }
</style>
