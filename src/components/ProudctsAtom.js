import React from 'react';
import { atom } from 'recoil';

const ProudctsAtom = () => {

 const anyName = atom({
  key: 'anyName', // unique ID (with respect to other atoms/selectors)
  default: [
   { id: '1' , title : 'product1'},
   { id: '2' , title : 'product2'},
   { id: '3' , title : 'product3'},
  ], // default value (aka initial value)
  
});
 return (
  <>
   
  </>
 );
}

export default ProudctsAtom;
