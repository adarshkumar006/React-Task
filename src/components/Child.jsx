import React from 'react'
import GrandChild from './GrandChild';
const Child=({language})=> {
  return (
    <div>
        <GrandChild language={language}/>
    </div>
  )
}

export default Child