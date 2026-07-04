import React from 'react'
import useForm from './components/useForm'

let CstmTask=()=>{

    let {name,setName,email,setEmail,showName,showEmail,show}=useForm('');
  return (
    <div>
        <center>
        <h2>{showName}</h2>
        <h2>{showEmail}</h2>
        Name:<input type='text'  value={name} onChange={(e)=>setName(e.target.value)}  /><br/>
        Email:<input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <button onClick={show} >Show</button>
       </center>
    </div>
  )
}

export default CstmTask