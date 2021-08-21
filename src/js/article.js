import {getAPI} from '../js/config'
import Vue from "vue";

const api = getAPI();


/**
 * 点赞
 * @param query
 * @returns {Promise<AxiosResponse<T>>}
 */
export function like(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/like',
        query,
    )
}

/**
 * 获取关注者的推文
 * @param query
 * @returns {AxiosPromise}
 */
export function follows(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/follows',
        query,
    )
}


/**
 * 发文
 * @param query
 * @returns {AxiosPromise}
 */
export function send(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/send',
        query,
    )
}
