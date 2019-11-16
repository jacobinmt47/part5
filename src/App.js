import React,{useState,useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
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
    const burl = '/api/blogs'
    axios.get(burl).then(response =>{setBlogs(response.data)})
  },[])
  const login = async () =>{
    console.log("called from login")
    console.log({username},'  ',{password})
    const login = await axios.post(baseurl,{username,password})
    console.log(login.data.token)
    setToken(login.data.token)
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         login to application
        </p>
      </header>
      username:<input type="text" onChange={handleUserNameChange} /><br />
      password:<input type="text" onChange={handlePasswordChange}/><br />
      <button onClick={() =>login()}>login</button>
    </div>
    
  );
  } else{
    return (
      <div>
        welcome {username}<br />
        <Blogs blogs = {blogs} />
      </div>
    );
  }
}

export default App;
