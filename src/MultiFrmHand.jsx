import {useState} from 'react'

let MultiFrmHand=()=>{

    let [form,setForm]=useState({name:"",email:""});

    let changeVal=(e)=>{

        setForm({...form,[e.target.name]:e.target.value});
    }
    let submitVal=(e)=>{

        e.preventDefault();
        alert(`your name is: ${form.name} and email is: ${form.email}`)
    }
  return (
    <div align='center'>
   <form onSubmit={submitVal}>
 Name:<input type='text' name='name' value={form.name} placeholder='Enter Name' onChange={changeVal}/><br/><br/>
 Email:<input type='email' name='email' value={form.email} placeholder='Enter Email' onChange={changeVal} /><br/><br/>
 <input type='submit' value='SendInfo'/>

   </form>
    </div>
  )
}

export default MultiFrmHand;