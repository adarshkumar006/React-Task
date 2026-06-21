import React,{useState,useEffect} from 'react'

let Effect=()=>{
    let [seconds,setSeconds]=useState(0);
    useEffect(()=>{
        //console.log('rendered')
        let timer=setInterval(()=>{
            setSeconds(seconds+1)
        },1000)
   
    return ()=>{
        clearInterval(timer);
   // console.log('rendered')

    }
     })
  return (
    <div>
<h3>{seconds}</h3>
    </div>
  )
}

export default Effect