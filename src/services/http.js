import axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

const http = axios.create({
  baseURL: isProd ? `https://vovo-juju-api.now.sh` : `http://localhost:3000`,
})

export default http
