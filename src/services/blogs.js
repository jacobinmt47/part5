import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  const r = request.then(response => response.data)
  console.log(r)
  return r 
}


export default { getAll }