import React from 'react';
import Poduct2 from './Poduct2';
import {useEffect ,  useState } from 'react';


const ProductList2 = () => {

 let api_url = 'https://fakestoreapi.com/products';

 const [products, setproducts] = useState ([]);



 useEffect(() =>{
  fetch (api_url).then((response) => response.json()).then((data) => setproducts(data));
 },[]) ;

 return (
  <>
   <h2 className="text-center p-3">Our Product</h2>
   <div className="container">
    <div className="row">

      {products.map((product) =>{
         return(
            <div className="col-3" key={product.id}>
             <Poduct2 product={product} showButton = "true" />
         </div>  
         )
      })}
      
   
    </div> {/* container */}
   

   </div>  {/* row */}
  </>
 );
}

export default ProductList2;
