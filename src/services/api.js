import http from './http'

const API_PREFIX = '/api'

export const getAllTalks = () =>
  new Promise((resolve, reject) =>
    http
      .get(`${API_PREFIX}`)
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err)),
  )
