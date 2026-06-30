import React,{useState,memo} from 'react'
 import { useCallback } from 'react'

let Child=memo(({user})=>{
    console.log('Child Rendered!!')
    return <p>{user}</p>
})
let Button=memo(({handleClick})=>{
    console.log('Button Rendered!!')
    return <button onClick={handleClick}>Click</button>
})
const AppuseCallback=()=>{
    console.log('App Render!!')
  let [count,setCount]=useState(0);
  
  let handleClick=useCallback(()=>{
     console.log('Button Clicked!!')
  },[])
 
  return (
    <div>
    <h2>useCallback Examole</h2>
        <p>{count}</p>
        <Child user="Adarsh"/>
        <button onClick={()=>setCount(count+1)}>Count</button>
    <Button handleClick={handleClick}/>
    </div>
  )
}

export default AppuseCallback