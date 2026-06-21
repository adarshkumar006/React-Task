import React from 'react'

let Form1=()=> {
  return (
    <div align='center'>
      <fieldset style={{width:'250px'}}>
         <legend><h2>Login Form</h2></legend>
        
        Name:<input type='text' name='name' placeholder='Enter Name..' /><br/><br/>
        Password:<input type='password' name='pass' placeholder='Enter PassWord' /><br/><br/>
        <button>Submit</button>
        </fieldset>
    </div>
  )
}

export default Form1