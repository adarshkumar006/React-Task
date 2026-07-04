import { useState } from 'react'

function useForm(){
    let [name,setName]=useState('');
    let [email,setEmail]=useState('');

    let [showName,setShowName]=useState('');
    let [showEmail,setShowEmail]=useState('');
 let show=()=>{
    setShowName(name);
    setShowEmail(email);
 };
 return {name,setName,email,setEmail,showName,showEmail,show}
}
export default useForm;