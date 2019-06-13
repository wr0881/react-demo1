import axios from './axios';

// 启动服务
export async function startServer(params) {
    return axios.post('/server/startServer', params);
}

// 停止服务
export async function stopServer(params) {
    return axios.delete('/server/stopServer', params);
}

//  初始化服务button状态
export async function initButtonStatus(params) {
    return axios.delete('/server/stopServer', params);
}
