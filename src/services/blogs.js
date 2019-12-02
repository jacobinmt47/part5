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

const increaseLikes = (author,title,id,likes,url,token) =>{
  console.log(author,title,id,likes,url)
  let l = likes 
  if (likes === null){
    l = 1
  }
  else {
    l = likes + 1
  }
 
  const obj ={
    likes:l
  }
  axios.put(baseUrl+'/'+id,obj)
  .then(r => console.log(r))
}

const deleteBlog = (id) => {
  axios.delete(baseUrl+'/'+id)
  .then(r => console.log(r))
  .catch(error => console.log(error))
}
export default { getAll, addBlog, increaseLikes, deleteBlog }