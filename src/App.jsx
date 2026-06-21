 import React from 'react';
//import image from '/assets/me.jpeg';
import Header from './components/Header';
import Footer from './components/Footer';
import Img from './components/Img';
import Student from './components/Student';
import Cndtnlrendr from './components/Cndtnlrendr';
import Mydate from './components/Mydate';
import { useState } from 'react';
const App = () => {
   
  let val1=41,val2=10;
  let [result,setRes]=useState(0);
      
  
  {/*  
  let [count,setCount]=useState(0)
let count=0;
  function setCount(){
       count+=1;
       console.log(count);
  }
       

      function showDate(){
        let dt=new Date();
        alert(dt.toString());
      }
      function showName()
      {
        return "Adarsh";
      }
        */}
    return(
      <div align="center">
        <h2>First Value:{val1}</h2>
        <h2>Second Value:{val2}</h2>
        <h2>Result:{result}</h2>
        <button onClick={()=>setRes(val1+val2)}>+</button>
        <button onClick={()=>setRes(val1-val2)}>-</button>
        <button onClick={()=>setRes(val1*val2)}>*</button>
        <button onClick={()=>setRes(val1/val2)}>/</button>
        <button onClick={()=>setRes(val1%val2)}>%</button>

      
      {/*<Header/>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>Count</button> 
      <Cndtnlrendr name="Seebu" course="Bsc" age={ 22} />
    <Student name="Adarsh" course="BCA" age={20} /> 
       <Student name="Amit" course="MCA" age={20} />
      {/*<Img/>
        <h1>welcome in React Js student</h1>
        <h2>second Line</h2>
        <a href="youtube.com">welcome</a>
        {/*<img src="/me.jpeg" width="50%" height="50%" alt="Image not found!!"/> 
     {/* <img src={image} width="50%" alt="Image not found!!"/> 
    <h2>show Name:{showName()}</h2>
     {/*  <button onClick={setCount}>Count</button>
    <button onClick={showDate}>Date</button>
    <button onClick={()=>console.log('clicked!!!!')}>Clicked Me</button>
    <Mydate/>
    <Footer/>
    */}
    </div>
   
    );
}
export default App