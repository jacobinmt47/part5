import React from 'react'

const Success = ({msg}) =>{
    if(msg === null){
        return (< br />)
    }
    else{
        return(
            <div className = 'success' >
              {msg}
            </div>
        )
    }
}
export default Success