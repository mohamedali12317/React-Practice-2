import React from 'react';
import { ProductsConTextE } from '../context/ProductsConText2';
import { useContext } from 'react';


const Try = (props) => {
 const products = useContext(ProductsConTextE);

 return (
  <>
    {products.map((product) =>
    <h1 key={product.id}>{product.title}</h1>
   )}
  </>
 );
}

export default Try;
