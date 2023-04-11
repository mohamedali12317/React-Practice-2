import {useEffect ,  useState } from 'react';


const ProductListApi = () => {

  const [products, setproducts] = useState ([]);

 useEffect(() => {
  // fetch('https://fakestoreapi.com/products/')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json));

  //           fetch('https://fakestoreapi.com/products/')
  //           .then( res => console.log(res) ) ;
           
            fetch('https://fakestoreapi.com/products/')
            .then(res =>res.json())
            .then( data => setproducts(data) ) ;

            
 }, []);

//  let productsData = products.map((product) =>{
    // return(
    //  <div className="card" key={product.id}>
  
    //  <img src={product.image} alt="" srcset="" />
  
    //   <h1>{product.title}</h1>
  
    //   <p>{product.description}</p>
  
    //  </div>
  
  // <productsData product={product} key={product.id} />
  
    // )
  
    // return product.price > 100 ? <productsData product={product} key={product.id} /> : null ;
  
  //  })

   
 let productsData = products.map((product) =>{
    return product.price > 100 && (
      <product key={product.id} product = {product}/>
    ) ;

    });
   

 return (
  <> 

<div className="product-list">
    {/* {productsData} */}
    {products.length === 0 ? <h1>loading...</h1> : null}
    <row>
    {productsData}
    </row>
   </div>
   
  </>
 );
}

export default ProductListApi;
