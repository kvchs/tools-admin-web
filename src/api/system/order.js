import request from '@/utils/request'

export function handleCk(data) {
  return request({
    url: 'api/users',
    method: 'post',
    data
  })
}

export function handleQs(data) {
  return request({
    url: 'api/users',
    method: 'post',
    data
  })
}

export function handleCkDbl(data) {
  return request({
    url: 'api/users',
    method: 'post',
    data
  })
}

export function handleQsDbl(data) {
  return request({
    url: 'api/users/center',
    method: 'post',
    data
  })
}

export default { handleCk, handleQs, handleCkDbl, handleQsDbl }

