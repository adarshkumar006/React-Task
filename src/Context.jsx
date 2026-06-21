import React from 'react'
import LanguageCon from './components/LanguageCon'
import ParentContext from './components/ParentContext'
import ChildContext from './components/ChildContext'
let Context=()=>{
  return (
    <div>
      <h1>useContext Example</h1>
      <LanguageCon.Provider value="Adarsh">
        <ParentContext/>
        <ChildContext/>
      </LanguageCon.Provider>
          </div>
  )
}

export default Context