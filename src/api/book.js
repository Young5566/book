import IP from "./ip";
import request from '@/plugin/axios'

export function getBookById (data) {
    return request({
        url: IP.IP + '/book/getById?id=' + data,
        method: 'get'
    })
}

export function addBook (data) {
    return request({
        url: IP.IP + '/book/add',
        method: 'post',
        data
    })
}

export function updateBook (data) {
    return request({
        url: IP.IP + '/book/update',
        method: 'post',
        data
    })
}

export function deleteBook (data) {
    return request({
        url: IP.IP + '/book/delete?id=' + data,
        method: 'delete'
    })
}

export function getAllBook (data) {
    return request({
        url: IP.IP + '/book/getAll?page=' + data,
        method: 'get'
    })
}