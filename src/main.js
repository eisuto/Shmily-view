import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "@/css/main.scss";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// 图标库
Vue.component("icon", require("./components/icons").default);
// ui库
Vue.use(vuetify);
// 表单请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = '';
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}];
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

export default new vuetify({
    icons: {
        iconfont: 'mdi', // 默认值 - 仅用于展示目的
    },
})
