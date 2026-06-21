import React from 'react'


let Props=(props)=> {
  return (
    <div>
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    <h2>{props.city}</h2>
    </div>
  )
}
// let Props=({name,age,city})=> {
//   return (
//     <div>
//     <h2>{name}</h2>
//     <h2>{age}</h2>
//     <h2>{city}</h2>
//     </div>
//   )
// }

export default Props


