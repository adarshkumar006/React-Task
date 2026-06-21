import {useState} from 'react';
const FormHand=()=>{

    let [name,setName]=useState("");
    let [email,setEmail]=useState("");

    let handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Name is: ${name} nad email is: ${email}`);
   }
   let handleChange=(e)=>{
              setName(e.target.value);
          }
    let handleEmail=(e)=>{
        setEmail(e.target.value);
    }

   return (
       <div align='center'>

            <form onSubmit={handleSubmit}>
        Name:<input type='text' onChange={handleChange}/><br/>
        Email:<input type='email' onChange={handleEmail}/><br/> 
        <button>Submit</button>
        </form>
       </div>
   )
}

export default FormHand;
