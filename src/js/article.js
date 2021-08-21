import {getAPI} from '../js/config'
import Vue from "vue";

const api = getAPI();


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
