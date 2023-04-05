import React from 'react';
import { useState } from 'react';
import Product from './product';
import Guest from './Guest';


function Rendering(){
 let [isLoggedIn, setLoggedIn] = useState(false);
 let [isLoggedIn2, setLoggedIn2] = useState(true);
 let [isLoggedIn3, setLoggedIn3] = useState(false);
 let [isLoggedIn4, setLoggedIn4] = useState(false);
 let [isLoggedIn5, setLoggedIn5] = useState(false);



 let element; 
 let element2 = isLoggedIn2 ? <h1> i'm logged in</h1> : element= <h1> i'm not logged in</h1>

 if (isLoggedIn) {
  element = <h1> i'm logged in</h1>
  
 } else {
  element= <h1> i'm not logged in</h1>
 }

 return (
  <>
  <button onClick={ () => {setLoggedIn(true)} }>Login</button>
  {element}

  <hr/>

  <button onClick={ () => {setLoggedIn2(false)} }>logout</button>
  {element2}

  <hr/>

  <button onClick={ () => {setLoggedIn3(true)} }>Login</button>
  {isLoggedIn3 ? <h1> i'm logged in</h1> : <h1> i'm not logged in</h1>}
  
  <hr/>


  <button onClick={ () => {setLoggedIn4(true)} }>Login</button>
  {isLoggedIn4 ?  <Product title="product-1" description="the best car" number="50000" /> : <Guest/>}
  
  <hr/>


  <button onClick={ () => {setLoggedIn5(true) } }>Login</button>
  {isLoggedIn5 ? <Product title="product-2" description="the best phone" number="11000"/> : null}
  
  </>
 );

}

export default Rendering;
