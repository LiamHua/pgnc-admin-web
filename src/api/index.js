import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
}

export function login (loginForm) {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        data: loginForm
    })
}
