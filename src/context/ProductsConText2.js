import React from 'react';
import { useState , createContext } from 'react';

export const ProductsConTextE = createContext ();


const ProductsConText2 = (props) => {

 const [product , setprodut] = useState ([
  { id: '4' , title : 'product4'},
  { id: '5' , title : 'product5'},
  { id: '6' , title : 'product6'},
 ])
 
 return (
  <>
      <ProductsConTextE.Provider value={product}>
       {props.children}
   </ProductsConTextE.Provider>
  </>
 );
}

export default ProductsConText2;



