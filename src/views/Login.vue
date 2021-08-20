<template>

    <v-app>
        <!-- 根据应用组件来调整你的内容 -->
        <v-main>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" md="4">
                    <svg t="1628049530215" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5752"
                         width="64" height="64">
                        <path d="M507.36 960.64a448.75 448.75 0 0 1-174.64-862 445.86 445.86 0 0 1 174.64-35.28 453.48 453.48 0 0 1 69 5.27A445.85 445.85 0 0 1 696.2 104.9a32 32 0 1 1-27 58 381.85 381.85 0 0 0-102.64-31.07 389.24 389.24 0 0 0-59.19-4.52 384.61 384.61 0 1 0 358.7 523.83 32 32 0 1 1 59.66 23.16 448.79 448.79 0 0 1-418.37 286.34zM933.27 552.74a32 32 0 0 1-32-32 390.18 390.18 0 0 0-3-48.67 384.48 384.48 0 0 0-122.21-235.31 32 32 0 0 1 43.18-47.24 448.54 448.54 0 0 1 142.48 274.54 454.25 454.25 0 0 1 3.55 56.69 32 32 0 0 1-32 31.99z"
                              fill="#FB7F26" p-id="5753"></path>
                        <path d="M517 485.73c-2.95 15.11-7.89 15.14-11 0.05l-54.46-266.06c-3.09-15.09 7-27.29 22.38-27.12l72.11 0.81c15.4 0.17 25.59 12.68 22.64 27.79zM505.92 540.7c2.95-15.11 7.89-15.14 11-0.05l54.52 266.07c3.09 15.09-7 27.29-22.38 27.12l-72.11-0.84c-15.4-0.17-25.59-12.68-22.64-27.79zM496 489.85c8.6 12.77 5.12 16.28-7.73 7.8L261.56 348.07c-12.85-8.48-14.36-24.23-3.35-35l51.56-50.42c11-10.77 27.06-9.13 35.66 3.65zM527 536.59c-8.6-12.77-5.12-16.28 7.73-7.8l226.68 149.58c12.85 8.48 14.36 24.23 3.35 35l-51.56 50.42c-11 10.77-27.06 9.13-35.66-3.65zM484 507.66c15.11 2.95 15.14 7.89 0.05 11L218 573.17c-15.09 3.09-27.29-7-27.12-22.38l0.81-72.11c0.17-15.4 12.68-25.59 27.79-22.64zM539 518.78c-15.11-2.95-15.14-7.89-0.05-11L805 453.27c15.09-3.09 27.29 7 27.12 22.38l-0.81 72.11c-0.17 15.4-12.68 25.59-27.79 22.64zM488.12 528.72c12.77-8.6 16.28-5.12 7.8 7.73l-149.59 226.7c-8.48 12.85-24.23 14.36-35 3.35l-50.42-51.56c-10.77-11-9.13-27.06 3.65-35.66zM534.85 497.72c-12.77 8.6-16.28 5.12-7.8-7.73l149.58-226.7c8.48-12.85 24.23-14.36 35-3.35L762 311.5c10.77 11 9.13 27.06-3.65 35.66z"
                              fill="#FB7F26" p-id="5754"></path>
                    </svg>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" md="4">
                    <div v-if="loginForm" class="text-h4 font-weight-bold">登录 Shmily</div>
                    <div v-if="registerForm" class="text-h4 font-weight-bold">注册 Shmily</div>
                    <br>
                    <v-alert v-if="alertLine"
                             type="error"
                    >{{errorMsg}}
                    </v-alert>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <!--            登录框-->
            <v-form v-if="loginForm" v-model="valid" ref="loginRef">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="4">
                            <v-text-field
                                    v-model="userForm.nikeName"
                                    label="邮箱"
                                    outlined
                                    :rules="nameRules"

                            ></v-text-field>
                            <v-text-field
                                    v-model="userForm.password"
                                    :rules="passwordRules"
                                    label="密码"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="show1 = !show1"
                                    outlined
                                    name="input-10-1"
                                    :type="show1 ? 'text' : 'password'"

                            ></v-text-field>
                            <v-btn elevation="2"
                                   @click="login"
                                   large
                                   block
                                   style="background-color: #fb7f26;color: #fff;font-size: 18px">
                                登录
                            </v-btn>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row align="center">
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="4">
                            <div style="margin: 0 auto;text-align: center">
                                <a>忘记密码</a>
                                <span> · </span>
                                <a @click="toRegister">注册 Shmily</a>
                            </div>


                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>

                </v-container>
            </v-form>
            <!--            注册框-->
            <v-form v-if="registerForm" v-model="valid" ref="registerRef">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="4">
                            <v-text-field
                                    v-model="userForm.email"
                                    label="邮箱"
                                    outlined
                                    :rules="nameRules"
                                    validate-on-blur

                            ></v-text-field>
                            <v-text-field
                                    v-model="userForm.verifyCode"
                                    label="验证码"
                                    outlined
                                    name="input-10-1"
                                    :rules="[v => !!v || '请填写验证码']"
                            >
                                <v-btn
                                        slot="append"
                                        height="25"
                                        top
                                        text
                                        style="font-size: 16px"
                                        @click="sendCode"
                                        v-if="authGetShow"
                                >
                                    获取验证码
                                </v-btn>
                                <v-btn
                                        slot="append"
                                        height="25"
                                        top
                                        text
                                        style="font-size: 16px"
                                        v-else
                                >
                                    {{authGetCount}}s
                                </v-btn>
                            </v-text-field>
                            <v-text-field
                                    v-model="userForm.password"
                                    :rules="passwordRules"
                                    label="密码"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="show1 = !show1"
                                    outlined
                                    name="input-10-1"
                                    :type="show1 ? 'text' : 'password'"
                            ></v-text-field>
                            <v-btn elevation="2"
                                   @click="register()"
                                   large
                                   block
                                   style="background-color: #fb7f26;color: #fff;font-size: 18px">
                                注册
                            </v-btn>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>

                    <v-row align="center">
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="4">
                            <div style="margin: 0 auto;text-align: center">
                                <a>已有账号? </a>
                                <a @click="toLogin()">登录Shmily</a>
                            </div>

                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                </v-container>
            </v-form>


<!--            底部提示-->
            <v-snackbar
                    v-model="snackbar"
            >
                {{ text }}
                <template v-slot:action="{ attrs }">
                    <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>


<!--            弹出提示-->
            <v-row justify="center">
                <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="380"
                >
                    <v-card>
                        <v-card-title class="text-h6">
                            注册成功！是否立即登录？
                        </v-card-title>
                        <v-card-text>当您选择了【稍后】选项，我们会跳转至登录页面，由您自行登录。</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="green darken-1"
                                    text
                                    @click="later()"
                            >
                                稍后
                            </v-btn>
                            <v-btn
                                    color="green darken-1"
                                    text
                                    @click="now()"
                            >
                                立即
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>

            <!-- 给应用提供合适的间距 -->
            <v-container fluid>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
    import Vuetify from "vuetify";
    import {
        login,
        getVerifyCode,
        register
    } from "../js/user"


    const TIME_COUNT = 60;
    export default {
        vuetify: new Vuetify(),
        data: () => ({
            // 注册跳转提示
            dialog: false,
            // 获取验证码按钮显示、计时
            authGetShow: true,
            authGetCount: undefined,
            authGetTime: null,

            // 登录注册的表单
            loginForm: true,
            registerForm: false,

            // 提示
            alertLine:false,
            errorMsg:undefined,

            valid: false,
            show1: false,
            userForm: {
                email:undefined,
                verifyCode: undefined,
                mobile: undefined,
                nikeName: undefined,
                password: undefined,
                rePassword: undefined,
            },
            snackbar: false,
            text: `验证码已发送到您的邮箱，请注意查收`,
            nameRules: [
                v => !!v || '请填写邮箱',
                v => {
                    const pattern = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                    return pattern.test(v) || '邮箱格式不正确'
                },
            ],
            passwordRules: [
                v => !!v || '请填写密码',
            ],
        }),
        methods: {
            // 稍后登录
            later(){
                this.dialog = false;
                this.toLogin();
            },
            // 马上登录
            now(){
                this.dialog = false;
                this.$router.push('/home');
            },
            /**
             *  验证码倒计时
             */
            send() {
                if (!this.authGetTimer) {
                    this.authGetCount = TIME_COUNT;
                    this.authGetShow = false;
                    this.authGetTimer = setInterval(() => {
                        if (this.authGetCount > 0 && this.authGetCount <= TIME_COUNT) {
                            this.authGetCount--;
                        } else {
                            this.authGetShow = true;
                            clearInterval(this.authGetTimer);  // 清除定时器
                            this.authGetTimer = null;
                        }
                    }, 1000)
                }
            },
            // 发送验证码
            sendCode() {
                getVerifyCode(this.userForm).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            this.snackbar = true;
                            this.send();
                        } else {
                            this.errorMsg = data.msg;
                            this.alertLine = true;
                        }
                    }
                )
            },
            // 切换注册
            toRegister() {
                this.userForm = {};
                this.$refs.loginRef.reset();
                this.registerForm = true;
                this.loginForm = false;
            },
            // 切换登录
            toLogin() {
                this.userForm = {};
                this.$refs.registerRef.reset();
                this.registerForm = false;
                this.loginForm = true;
            },

            // 登录请求
            login() {
                this.$refs.loginRef.validate();
                login(this.userForm).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            sessionStorage.setItem('userInfo', JSON.stringify(data.data));
                            this.$router.push('/home');
                        } else {
                            this.errorMsg = data.msg;
                            this.alertLine = true;
                        }
                    }
                )
            },
            // 注册请求
            register() {
                this.$refs.registerRef.validate();
                register(this.userForm).then(
                    res => {
                        const data = res.data;
                        if (data.code === 200) {
                            sessionStorage.setItem('userInfo', JSON.stringify(data.data));
                            this.dialog = true;
                            // this.$router.push('/home');
                        } else {
                            this.errorMsg = data.msg;
                            this.alertLine = true;
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    $input-font-size: 24px;
    .v-text-field {
        font-size: $input-font-size;
    }

    div[data-app='true'] {
        /*background: url('../img/back.jpg') no-repeat center center fixed !important;*/
        background-size: cover;
    }

</style>
