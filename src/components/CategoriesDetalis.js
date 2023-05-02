import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';

const CategoriesDetalis = () => {

 // let api_url =

 let {Categoriesid} = useParams();
 
 let params = useParams();
 console.log(params);

 let [produt , setprodut] = useState({});

 useEffect(() => {
  fetch(`http://localhost:3000/Categories/${Categoriesid}`).then(res => res.json()).then(result => {
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
    <h1>ProdutDetalis #{Categoriesid}</h1>    
    <h2>{produt.title}</h2>   
    <p>{produt.description}</p>
    <p>{produt.price}</p>   
    
     </div>
     
   </div>
  </>
 );
}

