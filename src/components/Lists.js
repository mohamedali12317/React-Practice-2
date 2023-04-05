import React from 'react';

const Lists = () => {
 let arr = ['html' , 'js' , 'css'];
 let arr2 = [{id: '1', name: 'mohamed'}, {id: '2' , name: 'ali'} , {id: '3' , name: 'omar'}];


 let li = arr.map((el) =>{
  return <li>{el}</li>
 })
 return (
  <>
   <ul>
       {li}
   </ul>

   <ol>
        {arr.map((el) =><li>{el}</li>)}
   </ol>

   <ul>
        {arr2.map((el) =><li key={el.id}>{el.name}</li>)}
        {arr2.map((el) =><li key={el.name}>{el.id}</li>)}
   </ul>
  </>
 );
}

export default Lists;
