import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';

const ProdutDetalis2 = () => {

 // let api_url =

 let {productid} = useParams();
 
 let params = useParams();
 console.log(params);

 let [produt , setprodut] = useState({});

 useEffect(() => {
  fetch(`http://localhost:3000/products/${productid}`).then(res => res.json()).then(result => {
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
    <h1>ProdutDetalis #{productid}</h1>    
    <h2>{produt.title}</h2>   
    <p>{produt.description}</p>
    <p>{produt.price}</p>   
    
     </div>
     
   </div>
  </>
 );
}

export default ProdutDetalis2;
