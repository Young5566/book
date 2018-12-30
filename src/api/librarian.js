import IP from "./ip";
import request from '@/plugin/axios'

export function updateLibrarian(data) {
    return request({
        url: IP.IP + '/librarian/update',
        method: 'post',
        data
    })
}

export function regist(data) {
    return request({
        url: IP.IP + '/librarian/regist',
        method: 'post',
        data
    })
}