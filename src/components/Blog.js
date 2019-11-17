import React from 'react'
const Blog = ({ blog }) => {
 const b = blog.map(i => <li key={i.id}><a href={i.url}>{i.title}</a></li>)
 return(
    <div>
    {b}
  </div>
)
}

export default Blog