import {getAPI} from '../js/config'
import Vue from "vue";

const api = getAPI();


/**
 * 上传文件
 * @param query
 * @returns {Promise<AxiosResponse<T>>}
 */
export function upload(query){
    // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    const config = {
        headers: { type: "file"}
    };
    console.log(query)
    return  Vue.prototype.axios.post(
            api.user_user_service + "/api/file/upload",
            query,
            config
        )
}


/**
 * 一个推文的评论列表
 * @param query
 * @returns {Promise<AxiosResponse<T>>}
 */
export function comments(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/comments',
        query,
    )
}


/**
 * 评论
 * @param query
 * @returns {Promise<AxiosResponse<T>>}
 */
export function comment(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/comment',
        query,
    )
}


/**
 * 取消点赞
 * @param query
 * @returns {Promise<AxiosResponse<T>>}
 */
export function unLike(query) {
    return Vue.prototype.axios.post(
        api.user_user_service + '/api/article/unLike',
        query,
    )
}


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
