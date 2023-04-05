import React from 'react';
import './Products.css';

const Products = (props) => {
 return (
  <>
   <div className="card" key={props.product.id}>

<img src={props.product.image} alt="" srcset="" />

  <h1>{props.product.title}</h1>

  <p>{props.product.description}</p>

  <p>price : {props.product.price}</p>

  <button onClick={()=>{console.log("u are going to buy this product" , props.product.price)}}>buy</button>

</div>
  </>
 );
}

export default Products;
