import React from 'react'
const Blog = ({ blog }) => {
 let b = null
 blog.then(r =>b=r)
 console.log(b)
 return(
    <div>
    {blog.title} {blog.author}
  </div>
)
}

export default Blog