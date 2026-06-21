import React,{useState,memo} from "react";

let Child=memo(()=>{
    console.log('Child Render');
    return <p>Child Created</p>
})
let Child2=React.memo(()=>{
  console.log('Child2 is Rendered');
  return <p>Second Child Created</p>
})
let  AppMemo=()=>{
    let [count,setCount]=useState(0);
      return (
    <div>
      <center>
        <h4>{count}</h4>
        <Child/>
        <Child2/>
        <button onClick={()=>setCount(count+1)}>Count</button>
      </center>
    </div>
  )
}

export default AppMemo