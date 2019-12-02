import React from 'react'
import BlogEntry from './BlogEntry'

const Blog = ({ blog }) => {
 blog.sort((a,b) => a.likes - b.likes)
 blog.reverse()
 const b = blog.map(i => <BlogEntry key ={i.id} url={i.url} author = {i.author} likes={i.likes} title ={i.title} id ={i.id}/>)
 return(
    <div>
    {b}
  </div>
)
}

export default Blog