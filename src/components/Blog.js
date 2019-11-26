import React from 'react'
import BlogEntry from './BlogEntry'

const Blog = ({ blog }) => {
 const b = blog.map(i => <li key={i.id}><BlogEntry url={i.url} author = {i.author} /></li>)
 return(
    <div>
    {b}
  </div>
)
}

export default Blog