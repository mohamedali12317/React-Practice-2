import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home2 from './Home2';
import Products3 from './components/Products3';
import './App.css';
import { Routes , Route } from 'react-router-dom';

const Practice3 = () => {
 return (
  <>
   <Navbar/>
   <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>

    <div className="col-10">
      <Home2/>
      
      {/* <Products3/> */}
      <Routes>
       <Route path ="/Home2" element={ <Home2/>} />
       <Route path ="/Products3" element={ <Products3/>} />
      </Routes>
     </div>
     
   </div>
  </>
 );
}

export default Practice3;
