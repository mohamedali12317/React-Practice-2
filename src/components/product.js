import React from 'react';
import Button from './Button';

const Product = (props) => {
 let account = {total : 1000};

 function withdraw(account, amount) {
  account.total -= amount;
 }

 withdraw(account , 100); 

console.log(account);// 900

withdraw(account , 100); 
console.log(account);// 800


 return (

  <>

   <div className="product-card">
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <span>{props.number}</span>
    <Button title="deteils"/>
   </div>
   

  </>
 );

}

export default Product;
