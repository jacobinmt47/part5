import React,{useState,useEffect} from 'react';
import axios from 'axios'
import blogService from './services/blogs'
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';

const baseurl = '/api/login'

const Blogs =  (props) =>{
  const b = props.blogs
  const c = b.map(p =><li key = {p.id}><a href ={p.url}>{p.title}</a></li>)
  return(
    <>
      {c}
    </>
  )
}

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState(null)
  const [token, setToken] =useState(null)
  useEffect(() =>{
      setBlogs(blogService.getAll())
  },[blogs])
  const login = async () =>{
    console.log("called from login")
    console.log({username},'  ',{password})
    const login = await axios.post(baseurl,{username,password})
    console.log(login.data.token)
    setToken('bearer ',login.data.token)
  }
  const handleUserNameChange = (event) =>{
    console.log("username changed")
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) =>{
    console.log("password changed")
    setPassword(event.target.value)
  }
  if(token === null){
  return (
    <div className="App">
      <Header logo={logo} />
      <h3>log into application</h3>
      username:<input type="text" onChange={handleUserNameChange} /><br />
      password:<input type="text" onChange={handlePasswordChange}/><br />
      <button onClick={() =>login()}>login</button>
    </div>
    
  );
  } else {
    return (
      <div>
        <Header logo={logo} />
        welcome {username}<br />
        <Blogs blogs={blogs} />
      </div>
    );
  }
}

export default App;
