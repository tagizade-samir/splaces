import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: '',
  timeout: 1000,
})
