import React from 'react'
import Child from './Child';
const Parent=({language})=> {
  return (
    <div>
        <Child language={language}/>

    </div>
  )
}

export default Parent