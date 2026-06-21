import React from 'react'
import { useParams } from 'react-router-dom';
const User=()=> {
    let {id,name}=useParams()
  return (
    <div>
            <h1>User Details</h1>
           <p>ID of User:{id}</p>
           <p>Name of User:{name}</p>            
    </div>
  )
}

export default User;