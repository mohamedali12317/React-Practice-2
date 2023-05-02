import React from 'react';
import { useContext } from 'react';
import { ProductsConText } from './StateLifting';

const NavbarStateLifting = (props) => {

 const value = useContext(ProductsConText);
 
 console.log(value);
 

 return (
  <>
   <h1>products count : {value.length}</h1>
   {props.children}

  </>
 );
}

NavbarStateLifting.toggle = function () {
return (
 <>
 <h1>toggle</h1>
 </>
)

}

export default NavbarStateLifting;
