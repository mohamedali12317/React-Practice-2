import React from 'react';
import { useState , useEffect } from 'react';

const ConterFc = () => {
let [counter , setcounter] = useState(0);


// امثلة للفهم

let arr = [10 , 20];
let arr2 = [10 , 20 , 30];


// let indexzero = arr [0];
// let indexone = arr [1];


let [indexzero , indexone] = arr;

let [index0 , ,indextwo ] = arr2;


console.log(indexzero);

console.log(indexone);

console.log(index0);


console.log(indextwo);

let [value , setvalue] = [0 , function () {return console.log('examle')}];

console.log(value);

console.log(setvalue);



// نهاية الامثلة

// useEffect

let [count , setcount] = useState(0);

useEffect(() => {
   document.title = `You clicked ${count} times`;
   // console.log('here');
});



 return (
  <>
     <h1>counter: {counter}</h1>
     <button onClick={() => setcounter(counter + 1)}>+</button>

     <h1>counter: {count}</h1>
     <button onClick={() => setcount(count + 1)}>+</button>
  </>
 );
}

export default ConterFc;
