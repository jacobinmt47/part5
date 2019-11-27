import React,{useState, useImperativeHandle}from 'react'
import blogs from '../services/blogs'

const BlogEntry = React.forwardRef((props,ref) =>{
    const [visable, setVisable] = useState(false)
    const hideWhenVisable = {display : visable ? 'none' : ''}
    const showWhenVisalbe = {display : visable ? '' : 'none'}

    const plusLikes = () => {
        blogs.increaseLikes(props.author,props.title,props.id,props.likes,props.url)
    }
    const deleteBlog = () => {
        let d = window.confirm(`delete blog ${props.title}`)
        if(d){
            console.log('delete blog')
            blogs.deleteBlog(props.id)
        }
    }
  
    const ToggleVisibility = () => {
        setVisable(!visable)
    }
    useImperativeHandle(ref,() => {
        return ToggleVisibility
    })

    return(
        <div>
            <div style = {hideWhenVisable} >
                <button onClick = {ToggleVisibility}>expand</button>
                <a href = {props.url}>{props.title}</a> <br />
            </div>
            <div style = {showWhenVisalbe} >
                <a href = {props.url}>{props.title}</a> <br />
                likes: {props.likes} <button onClick={plusLikes}> increase likes</button><br />
                author: {props.author} <br />
                id: {props.id} <br />
                <button onClick = {deleteBlog}>delete entry</button>
                <button onClick = {ToggleVisibility}>contract</button>
            </div>
        </div>
    )
})
export default BlogEntry