import React from 'react';
import { useContext } from 'react';
import { ProductsConText } from './StateLifting';


const ProductlistStateLifting = (props) => {

 const products_AnyName = useContext(ProductsConText);


 return (
  <>
   {products_AnyName.map((product) =>
    <h1 key={product.id}>{product.title}</h1>
   )}  
   
   

  </>
 );
 
}

export default ProductlistStateLifting;
