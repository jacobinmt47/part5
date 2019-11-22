import React from 'react'

const Success = ({msg}) =>{
    if(msg === null){
        return 
    }
    else{
        return(
            <div className = 'success' />
              {msg}
            </div>
        )
    }
}