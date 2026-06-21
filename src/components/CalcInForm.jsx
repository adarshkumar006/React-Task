import React from 'react'
import {useState} from 'react';
let CalcInForm=()=> {

    let [result,setResult]=useState({val1:"", val2:"", res:'',})
//          console.log(result);
    let changeVal=(e)=>{
        setResult({...result,[e.target.name]:e.target.value})
    }
    let calcFun=(e)=>{

        if((e.target.name)== '+'){
     let add=(parseInt(result.val1)+parseInt(result.val2));
           setResult({...result,res:add});   
    }
    if((e.target.name)== '-'){
     let sub=(parseInt(result.val1)-parseInt(result.val2));
           setResult({...result,res:sub});   
    }
    if((e.target.name)== '*'){
     let mul=(parseInt(result.val1)*parseInt(result.val2));
           setResult({...result,res:mul});   
    }
    if((e.target.name)== '/'){
     let div=(parseInt(result.val1)/parseInt(result.val2));
           setResult({...result,res:div});   
    }
    if((e.target.name)== '%'){
     let mod=(parseInt(result.val1)%parseInt(result.val2));
           setResult({...result,res:mod});   
    }
    }

  return (
    <div align='center'>
        <fieldset style={{width:'250px'}}>
            <legend><h2>Calculator</h2></legend>
        <form>
           First Value:<input type='text' name='val1' value={result.val1} onChange={changeVal} placeholder='Enter Value' /><br/><br/>
           Second Value:<input type='text' name='val2' value={result.val2} onChange={changeVal} placeholder='Enter Value' /><br/><br/>
          <input type='text' name='res' placeholder='Result is...' value={result.res} onChange={changeVal} /><br/><br/> 
          <input type='button' name='+' value='+' onClick={calcFun}/>
           <input type='button' name='-' value='-' onClick={calcFun}/>      
           <input type='button' name='*' value='*' onClick={calcFun}/>      
           <input type='button' name='/' value='/' onClick={calcFun}/>      
           <input type='button' name='%' value='%' onClick={calcFun}/>     
        </form>
        </fieldset>
    </div>
  )
}

export default CalcInForm