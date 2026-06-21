import React from 'react'
import { useState } from 'react'

let Todo=()=> {
    let [data,setData]=useState("");
    let [value,setValue]=useState([]);
    const [edit,setEdit] = useState(null);
    


     let editVal=(index)=>{
   // console.log('triger')
    setData(value[index]);
    setEdit(index)
}

let addVal=()=>{
    if(edit!==null){
       let newArr = [...value];
      newArr[edit] = data;
      setValue(newArr)
      setEdit(null);
}else{
    setValue([...value,data])
}
setData("")
}

let deleteVal=(index)=>{
     let newArr=value.filter((item,i)=>i!==index);
    setValue(newArr)
    
}

  return (
    <>
    <center>
    <h1>To-Do App</h1>
    <input type='text'  value={data} onChange={(e)=>{setData(e.target.value)}} placeholder='Enter Name..' 
    style={{ backgroundColor:'orange',borderRadius:'5px', height:'20px',width:'160px',fontSize:'20px'}}/><br/><br/>
    <button onClick={addVal}  style={{ backgroundColor:'cyan',borderRadius:'10px'}}>ADD</button><br/><br/>
   
   {value.map((item,index)=>(
    < div key={index}>  
    <table border='1' style={{width:"200px"}}>
        <tbody>
        <tr style={{ backgroundColor:'pink'}}>    
     <td>{item}</td> 
     <td style={{textAlign:'right', backgroundColor:'green',width:"93px"}}>
     <input type='button' onClick={()=>editVal(index)} value='Edit'
      style={{ backgroundColor:'gray'}} />
     <input type='button' onClick={()=>deleteVal(index)} value='Delete'
     style={{ backgroundColor:'red'}}  />
   </td>
   </tr>
     </tbody>
     </table>  
    </div>
))}
    </center>
    </>
  )
}

export default Todo;