import axios from 'axios'
const baseUrl = '/api/blogs'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data) 
}

const addBlog = (author,title,url,token) =>{
  const tk = `bearer ${token}`
  console.log(author,title,url,tk)
  const obj ={
    author:author,
    title:title,
    url:url
  }
  const config = {
    headers:{Authorization:tk}
  }
  const response = axios.post(baseUrl,obj,config)
  return response.then(r => r.data)
}


export default { getAll, addBlog }