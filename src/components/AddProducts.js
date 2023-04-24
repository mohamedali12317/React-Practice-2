import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const AddProducts = () => {
 return (
  <>
   <Navbar/>
   <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>

    <div className="col-10">
   <h1>Add Products</h1>
     
     </div>
     
   </div>
  </>
 );
}

export default AddProducts;
