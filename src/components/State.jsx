import { useState } from "react";
import React from 'react'

let State=()=>{
  let [count,setCount]=useState(0)
  let [name,setName]=useState("")
  let [change,setChange]=useState("")
  
  //console.log(name)
  
  // let changeVal=()=>{
  //   setChange(name);
  // }
  return (
    <center>
    <div>
      <h2>{count}</h2>  
      <h3>{change}</h3>
      <button onClick={()=>setCount(count+1)}>Count</button><br/>
      <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
      <button onClick={()=>setChange(name)}>Change Value</button>
    </div>
    </center>
  )
}

export default State