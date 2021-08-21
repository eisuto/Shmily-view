export function getAPI() {
  // 本地
  const api_local = {
    // 用户侧 - 用户服务
    user_user_service: "http://127.0.0.1:8001"
  };
  const api_dev = {
    // 用户侧 - 用户服务
    user_user_service: "http://82.156.231.128:8001"
  };
  // 返回根机
  return api_local;
}
