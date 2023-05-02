import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useState , useEffect } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Product from './product';

const Edit = () => {

  let [title , setTitle]  = useState ('');
  let [price , setPrice]  = useState (0);
  let [description , setDescription]  = useState ('');
  let [ , setprodut] = useState({});


  let navigate = useNavigate(); 

  let formSubmit = (e) => {
      e.preventDefault();

      console.log('title' , title);
      console.log('price' , price);
      console.log('description' , description);

      // axios.post('http://localhost:3000/products' , {
      //    title,
      //   price,
      //   description,
      // }).then( data => {
      //   console.log(data);
      //   navigate('/Products3');
      // })

      fetch( `http://localhost:3000/products` , {
        method : 'PUT' ,
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify({
          // title : title,
          // price : price,
          // description : description,

          // or 
          title,
          price,
          description,
        }),

      }).then( res => res.json())
      .then( data => {
        console.log(data);
        navigate('/Products3');
      })
  }

  useEffect(() => {
   fetch(`http://localhost:3000/Products3/edit/${Product.id}`).then(res => res.json()).then(result => {
     console.log(result) ;
     setprodut(result) ;
   });
  }, []);

 return (
  <>
   <Navbar/>
   <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>

    <div className="col-10">
   <h1>Edit Products</h1>

   <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="productTitle" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="productTitle"
      placeholder='product title'
      aria-describedby="product title"

      onChange={(e)=> setTitle(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="productPrice" className="form-label">
      Price
    </label>
    <input
      type="Number"
      className="form-control"
      id="productPrice"
      placeholder='product price'
      aria-describedby="product price"

      onChange={(e)=> setPrice(e.target.value)}
    />
  </div>

  <div className="mb-3" >
    <label htmlFor="productDescription" className="form-label">Description</label>
    <input
      type="text"
      className="form-control"
      id="productDescription"
      placeholder='product description'
      aria-describedby="product description"
      required
      onChange={(e)=> setDescription (e.target.value)}
    />
  </div>


  <button type="submit" className="btn btn-primary">
    Add Product
  </button>
</form>

     
     </div>
     
   </div>
  </>
 );

}

export default Edit;
