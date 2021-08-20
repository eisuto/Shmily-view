import {getAPI} from '../js/config'
import Vue from "vue";

const api = getAPI();


/**
 * 登录 用户侧
 * @param query
 * @returns {AxiosPromise}
 */
export function login(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/user/login',
        query,
    )
}

/**
 * 注册 用户侧
 * @param query
 * @returns {AxiosPromise}
 */
export function register(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/user/register',
        query,
    )
}

/**
 * 获取手机验证码 用户侧
 * @param query
 * @returns {AxiosPromise}
 */
export function getVerifyCode(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/user/getVerifyCode',
            query,

    )
}

