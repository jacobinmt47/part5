import React,{useState, useImperativeHandle}from 'react'

const BlogEntry = React.forwardRef((props,ref) =>{
    const [visable, setVisable] = useState(false)
    const hideWhenVisable = {display : visable ? 'none' : ''}
    const showWhenVisalbe = {display : visable ? '' : 'none'}
  
    const ToggleVisibility = () => {
        setVisable(!visable)
    }
    useImperativeHandle(ref,() =>{
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
                likes: {props.likes} <br />
                <button onClick = {ToggleVisibility}>contract</button>
            </div>
        </div>
    )
})
export default BlogEntry