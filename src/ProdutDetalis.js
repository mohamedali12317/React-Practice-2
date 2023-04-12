import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Poduct2 from './components/Poduct2';

const ProdutDetalis = () => {
 let api_url = 'https://fakestoreapi.com/products';
 
 let [produt , setprodut] = useState({});
 console.log(produt);

 let params = useParams();
 console.log(params);
 

 useEffect(() => {
  fetch (`${api_url}/${params.productid}`).then((res) => res.json()).then((produt) =>setprodut(produt));
 }, [])

 return (
  // <h1>
  //   Produt Detalis - {produt.title} {params.ProdutId}
  // </h1>
  <Poduct2 product = {produt} showButton = {false}/>
 );
}

export default ProdutDetalis;
