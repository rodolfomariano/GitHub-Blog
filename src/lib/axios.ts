import axios from 'axios'

export const getUserData = axios.create({
  baseURL: 'https://api.github.com/',
})

export const getIssues = axios.create({
  baseURL: 'https://api.github.com/search/',
})
