import axios from 'axios'
import store from '../store'
import router from '../router'

// http 全局拦截
export default function setAxios() {
    // http请求拦截
    axios.interceptors.request.use(
        config => {
            // 如果存在token，添加到headers
            if (store.state.token) {
                config.headers.token = store.state.token
            }
            return config
        }
    )

    // 响应拦截
    axios.interceptors.response.use(res => {
        // 处理所以状态码200(资源请求成功), 只返回携带的data
        if (res.status == 200) {
            const data = res.data
            return data;
        }
        return res;
    },
        error => {
            // console.log('error')
            // console.log(error)
            if (error.response) {
                //token失效返回401处理
                if (error.response.code === 401) {
                    //刷新token
                }
                return Promise.reject(error.response.code) // 返回错误信息

            }
            else {
                error.message = '访问服务器异常'
                error.code = 404
            }
            return Promise.resolve(error) // 返回错误信息
        }
    )
}