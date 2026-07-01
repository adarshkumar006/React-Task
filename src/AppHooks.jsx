import React from 'react'
import useCounter from './components/useCounter'

let AppHooks=()=>{
    let {count,increment,decrement,reset}=useCounter(0);
  return ( 
    <div>
        <h1>Custom Hook Example</h1>
        count:<p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default AppHooks
