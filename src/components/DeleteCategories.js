import React from 'react';
import Swal from 'sweetalert2'
import { useState , useEffect } from 'react';



const DeleteCategories = () => {

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


 const DeleteProduct = (Categories) => {

  Swal.fire({
    title: `are u sure to delete  ${Categories.title} and the Id ${Categories.id} ? `,
    showCancelButton : true,
  }).then( data => {
  console.log(data);
  
  if (data.isConfirmed) {
    console.log(Categories);
  fetch(`http://localhost:3000/Categories/${Categories.id}` , {
    method: 'DELETE'
  })
  .then( res => res.json())
  .then( data => {
    console.log(data);
    // GetAllProducts ();
  })
  }
  
  })
  
  }

 return (
  <>
 {Categories.map((Categories)=> {
   return <div className="row mt-5">
    <h6>{Categories.title}</h6>
    <button className="btn btn-danger btn-sm" onClick={ () => DeleteProduct(Categories) } >Delete</button>

   </div>
  })}

  </>
 );
}

export default DeleteCategories;
