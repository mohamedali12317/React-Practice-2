import React from 'react';
import { useState , useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Pages.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Categories = () => {
 const [Categories, setCategories] = useState ([]);

 useEffect(() => {
  GetAllProducts ();
  
 
 }, []);


 const GetAllProducts = () => {
   fetch('http://localhost:3000/Categories')
   .then( res => res.json() ) 
   .then(data => {
     console.log(data);
     setCategories(data)
   } );
 }


 return (
  <>
    <Navbar/>
    <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>

    <div className="col-10">
    <h1>Categories page</h1>

  <Link to={'/Categories/add'} className="btn btn-success mt-3">Add New Categories</Link>
  <Link to={'/Categories/delete'} className="btn btn-success mt-3">delete Categories</Link>

  {Categories.map((Categories)=> {
   return <div className="row mt-5">
    <h6>{Categories.title}</h6>
   </div>
  })}

 
     </div>
     </div>
     
  </>
 );
}

export default Categories;
