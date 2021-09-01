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
                    <div class="sendTweet">

                    </div>
                    <el-upload
                            class="upload-demo"
                            :action="getUploadPath()"
                            :on-success="uploadOk"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="6"
                            list-type="picture"

                            :on-exceed="handleExceed"
                            :file-list="fileList">
                        <el-button icon="el-icon-picture" type="text"
                                   style="height: 40px;width: 40px;font-size: 22px;color: #fb7f26"
                        ></el-button>

                        <!--                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    </el-upload>
                    <v-btn

                            elevation="0"
                            color="#fb7f26"
                            dark
                            rounded
                            style="font-weight: bolder;margin-left: -50px"
                            @click="sendArticle()"
                    >发推
                    </v-btn>
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
        send, upload
    } from "../js/article"
    import {login} from "../js/user";
    import {getAPI} from "../js/config";

    export default {
        name: "tweetSendArea",
        vuetify: new Vuetify(),
        data() {
            return {
                fileList: [],
                maxSize: 1024 * 10, // 10 KB
                previewIMG: null,
                limit: 1,
                isPreview: false,
                type: 2, // 0 预览模式 1 列表模式 2 预览模式 + 上传按钮
                files: [],
                clickedTextArea: false,
                article: {
                    uploadImgUrls:[],
                    info: '',
                    userId: JSON.parse(sessionStorage.getItem("userInfo")).id,
                },
            };
        },
        created() {

        },
        mounted() {
            // document.getElementsByClassName('upload-label-upload')[0].innerText = ".";
            // document.getElementsByClassName('upload-main')[0].style.display = 'none';

        },
        methods: {
            getUploadPath() {
                return getAPI().user_user_service + "/api/file/upload";
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            uploadOk(res) {
                console.log(res);
                this.article.uploadImgUrls.push(res.data);
                console.log(this.article.uploadImgUrls)
            },
            sendArticle() {
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
            },
            // 图片上传相关
            oversize(file) {
                console.log('oversize')
                console.log('filesize:' + file.size / 1024 + 'KB')
            },

            afterRead(file) {
                console.log('after-read')
                document.getElementsByClassName('upload-main')[0].style.display = 'block';
                this.article.info = " ";
                console.log(file)
            },

            // beforeRemove(index, file) {
            //     console.log(index, file)
            //     return true
            // },

            preview(index, file) {
                this.previewIMG = file.url
                this.isPreview = true
            },

            exceed() {
                alert(`只能上传${this.limit}张图片`)
            },

            beforeRead(files) {
                console.log('before-read')
                for (let i = 0, len = files.length; i < len; i++) {
                    const file = files[i]
                    if (file.type != 'image/jpeg' && file.type != 'image/png') {
                        alert('只能上传jpg和png格式的图片')
                        return false
                    }
                }

                return true
            },

            closePreview() {
                this.isPreview = false
            }
        },
        components: {CustomButton, CustomText, Avatar}
    };

</script>

<style scoped lang="scss">
    ::v-deep .el-button el-button--text {
        margin: 0;
    }

    ::v-deep .upload-demo {
        width: 500px;
    }

    ::v-deep .el-upload-list--picture .el-upload-list__item {
        margin-right: 10px;
        width: 92px;
        display: inline-block;
    }

    ::v-deep .el-upload-list__item-name {
        display: none;
    }

    ::v-deep .vue-upload-imgs {
        margin-top: 8px;

    }

    ::v-deep .upload-label-upload {
        width: 24px;
        height: 24px;
        padding: 6px 0px;
        /*background-color: #fff;*/
        background: url("../assets/image.png");
    }

    ::v-deep .upload-div-add-img {
        width: 100px !important;
        min-width: 100px;
        min-height: 100px;
        height: 100px;
    }

    ::v-deep .upload-div-img {
        width: 100px !important;
        min-width: 100px;
        min-height: 100px;
        height: 100px;
    }

    .container {
        width: 100%;
        min-height: 118px;
        max-height: 260px;
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
