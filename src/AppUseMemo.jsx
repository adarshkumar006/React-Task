import React,{useState,useMemo} from 'react';
const AppUseMemo=()=>{
    let [num,setNum]=useState(5);
    let [name,setName]=useState('');

    console.log('App Render.....');
    let factMemo=useMemo(()=>{
        console.log('calculating factorial!!') 
        let f=1
        for(let i=num ;i>=1;i--){
            f=f*i;
        }
     return f;
    },[num])
    return(
    <div>
        <h1>useMemo Example</h1>
        <p>{factMemo}</p>
    Name:<input type='text' onChange={(e)=>setName(e.target.value)} value={name}/><br/>
    Number:<input type='number' onChange={(e)=>setNum(parseInt(e.target.value))} value={num} />

  </div>
    )}
export default AppUseMemo;