import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueUploadImgs from 'vue-upload-imgs'
import md5 from 'js-md5';
import "@/css/main.scss";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Toast from "vue-toastification";
import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-loader

import "vue-toastification/dist/index.css";

const options = {
    transition: 'Vue-Toastification__fade',
    maxToasts: 5,
    newestOnTop: true,
    position: 'top-center',
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.7,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false
};
Vue.use(Toast, options);


// 图标库
Vue.component("icon", require("./components/icons").default);
// ui库
Vue.use(vuetify);
// 上传组件
Vue.use(VueUploadImgs);

// 表单请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = '';
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}];
Vue.prototype.md5 = md5;
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

export default new vuetify({
    icons: {
        iconfont: 'mdi',
    },
})
