import React from 'react';
import { BrowserRouter,Route,Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import ErrorPage from './components/ErrorPage';
const  Navigt=()=> {
  return (
    <div>
        <h1>Navigation Example</h1>
        
        <BrowserRouter>
        <nav>
            <Link to='/'>Home</Link>||
            <Link to='/About'>About</Link>||
          <Link to='/user/101/Adarsh'>user 101</Link>

        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
            <Route path='/user/:id/:name' element={<User/>}></Route>
            
            
        </Routes>
        </BrowserRouter>
    </div>
  )
};

export default Navigt;