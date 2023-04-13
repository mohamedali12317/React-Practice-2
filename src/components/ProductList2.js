import React from 'react';
import Poduct2 from './Poduct2';
import {useEffect ,  useState } from 'react';


const ProductList2 = () => {

 let api_url = 'https://fakestoreapi.com/products';

 let getProduct = () => {
   fetch (api_url).then((response) => response.json()).then((data) => setproducts(data));

 }

 let getCategory =  () => {
   fetch (`${api_url}/categories`).then((response) => response.json()).then((data) => setcategory(data));

 }

 
 let getProductInCategory =  (CatName) => {
   console.log(CatName);
   fetch (`${api_url}/category/${CatName}`).then((response) => response.json()).then((data) => setproducts(data));

 }

 const [products, setproducts] = useState ([]);

 const [category, setcategory] = useState ([]);




 useEffect(() =>{

//   fetch (api_url).then((response) => response.json()).then((data) => setproducts(data));

getProduct();

getCategory();

 },[]) ;

 return (
  <>
   <h2 className="text-center p-3">Our Product</h2>
   <div className="container">
<div className="m-auto text-center"> 
     <button className="btn btn-info m-2 " onClick={() => { getProduct(); } }>All</button>
  
        {category.map((cat) =>{
           return (
            <>
              <button button key={cat} className="btn btn-info m-2" onClick={() => { getProductInCategory(cat); } }>{cat}</button>
            </>
           )
  
        } )}
</div>

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
