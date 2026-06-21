import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Calc from './components/CalcInForm';
import Form1 from './components/Form1';
import Home from './components/Home';
let Navtask=()=>{
  return (
    <div align='center'>
        <h1>Navigation Task</h1>
        <BrowserRouter>
         <nav>
            <Link to='/'>Home</Link>||
         <Link to='/Calc'>Calculator</Link>||
         <Link to='/Form1'>Form</Link><br/><br/>
         </nav>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Calc' element={<Calc/>}></Route>
            <Route path='/Form1' element={<Form1/>}></Route>
         </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Navtask