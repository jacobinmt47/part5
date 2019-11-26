import React from 'react'

const BlogEntry = React.forwardRef((props,ref) =>{

    return(
        <div>
            <a href = {props.url}>{props.title}</a>
        </div>
    )
})
export default BlogEntry