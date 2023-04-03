import React from 'react';
import { useState } from 'react';

const Greeting = (props) => {
let [counter , setconter] = useState(0);
let [name , setname] = useState ("mohamed");


  console.log(props);

 return (
  <>
   <h2>hi , {props.name}</h2>
  <p>age {props.age}</p>
  <p>job {props.job}</p>

  <h4>{counter}</h4>

  <h4>{name}</h4>


  <button onClick={()=>{
    setconter(counter++)
  }}
  >
    +
  </button>

  <button onClick={()=>{
   setname("mohamed ali")
  }}
  >
    {name}
  </button>

  </>

  
 );
}


// function Greeting(props) {
  
//   console.log(props);

//   return(
//     <h2>hi , {props.name} i am {props.age}</h2>
//   )
// }

export default Greeting;
