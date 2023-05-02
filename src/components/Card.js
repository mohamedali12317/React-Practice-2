import React from 'react';

const Card = (props) => {
 return (
  <>
   <h1>Card</h1>
   {props.children}
  </>
 );
}

Card.Title = function (){
 return (
  <>
   <h1>Card Title</h1>
  </>
 );

} 

Card.Img = function (props){
 return (
  <>

   <img src={props.src} alt=""/>

  </>
 );
 
}


export default Card;
