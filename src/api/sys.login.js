import request from '@/plugin/axios'
import IP from './ip'

export function AccountLogin (data) {
  return request({
    url: IP.IP + '/librarian/login',
    method: 'post',
    data
  })
}
