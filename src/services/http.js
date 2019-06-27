import axios from 'axios'

const http = axios.create({
  baseURL: `https://api-vovo-juju.netlify.com`
})

export default http
