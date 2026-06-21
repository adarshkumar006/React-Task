import React from 'react'
import { useState } from 'react'

let AppStateR=()=>{
    let [checked,setCheked]=useState(false)
  return (
    <div>
        Select:<input type='checkbox' onClick={()=>setCheked(!checked)}/>
        <p>{checked===true?"Button Checked":"Button Unchecked"}</p>
    </div>
  )
}

export default AppStateR