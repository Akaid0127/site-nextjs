import axios from 'axios';

//此处是增加的代码，设置请求头的类型
axios.defaults.headers['Content-Type'] = 'application/json';

// 设置api接口baseURL
let request = axios.create({
	baseURL: "http://localhost:3000",
    timeout: 5000,
    withCredentials: false,// 跨域请求时是否需要访问凭证
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request