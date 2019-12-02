import React,{useState,useEffect} from 'react';
import axios from 'axios'
import blogService from './services/blogs'
import logo from './logo.svg'
import Header from './components/Header'
import Blogs from './components/Blog'
import Error from './components/Error'
import Success from './components/Success'
import Toggleable from './components/Toggleable'
import {useField} from './hooks'

import './App.css';

const baseurl = '/api/login'

function App() {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  //const [title, setTitle] = useState('')
  const title = useField('text')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const [blog, setBlog] = useState(null)
  const [token, setToken] = useState(null)
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  useEffect(() =>{
   blogService.getAll().then(i =>setBlog(i))
   console.log('getall called')
  },[])
  useEffect(() =>{
    const tokenJSON = window.localStorage.getItem('login')
    const user = window.localStorage.getItem('user')
    const token = JSON.parse(tokenJSON)
    //console.log(token)
    if(token !== null){
      console.log('called from useEffect',token)
      username.setValue(user)
      setToken( token)
    } 
  },[])
  const login = async () =>{
    console.log("called from login")
    console.log({username},'  ',{password})
    try{
    const login = await axios.post(baseurl,{username,password})
    const tk = login.data.token
    console.log(tk)
      setToken(tk)
      window.localStorage.setItem('login',JSON.stringify(tk))
      window.localStorage.setItem('user',username)
      console.log('called from login ',JSON.stringify(tk))
    }
    catch (error){
      setError('login failed')
    }
  }
  const handleUserNameChange = (event) =>{
    console.log("username changed")
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) =>{
    console.log("password changed")
    setPassword(event.target.value)
  }
  const handleLogout = (event) =>{
    console.log("logout")
    window.localStorage.removeItem('login')
    setToken(null)
  }
  const handleAddBlog = (event) => {
    console.log('add blog')
    const retBlog = blogService.addBlog(author,title,url,token)
    retBlog.then(r =>
      {setSuccessMsg(`adding ${r.title} blog worked `)
      console.log(r)
      })
    retBlog.catch(error => console.log(error))
    
  }

  const handleAuthorChanged= (event) => {
    setAuthor(event.target.value)
  }
  const handleUrlChanged = (event) => {
    setUrl(event.target.value)
  }
  const handleTitleChanged = (event) => {
    setTitle(event.target.value)
  }

  
  if((token === null)||(blog === null)){
  return (
    <div className="App">
      <Header logo={logo} />
      <Error msg={error} />
      <h3>log into application</h3>
      username:<input type='text'  onChange = {handleUserNameChange} /><br />
      password:<input type="text" onChange={handlePasswordChange}/><br />
      <button onClick={() =>login()}>login</button>
    </div>
    
  );
  } else {
    return (
      <div>
        <Header logo={logo} />
        <Success msg={successMsg} />
        welcome {username} <button onClick={handleLogout}>logout</button> <br/>
        <Toggleable buttonLabel='add Blog '>
          <h2>Add new blog</h2>
          title: <input type={title.type} value={title.value} onChange={title.onChange} /> <br/>
          author:<input type="text" onChange={handleAuthorChanged}/> <br/>
          url:<input type="text"    onChange={handleUrlChanged} /> <br />
          <button onClick={handleAddBlog}>add blog </button>
        </Toggleable>
        <br />
        <Blogs blog={blog} />
      </div>
    );
  }
}

export default App;
