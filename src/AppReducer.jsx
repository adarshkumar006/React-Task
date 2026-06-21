import React from 'react'
import { useReducer } from 'react'

let AppReducer=()=>{
    let [checked ,dispatch]=useReducer((checked)=>!checked,false)
  return (
    <div>
        <center>
                Select:<input type='checkbox' onClick={dispatch}/>
               <p>{checked===true?"Button Checked":"Button Unchecked"}</p>
       </center>

    </div>
  )
}

export default AppReducer