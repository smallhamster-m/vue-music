import axios from 'axios'
const url = '/'
const ERR_OK = 0
axios.defaults.baseURL = url
export function get(url, params) {
  return axios
    .get(url, { params })
    .then((res) => {
      if (res.data.code === ERR_OK) {
        return res.data.result
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
