import React from 'react';
import { useState , createContext } from 'react';
import NavbarStateLifting from './NavbarStateLifting';
import ProductlistStateLifting from './ProductlistStateLifting';
import ProductsConText2 from '../context/ProductsConText2';
import Try from './Try';

import Card from './Card';

export const ProductsConText = createContext ();
const StateLifting = () => {

 const [product , setprodut] = useState ([
  { id: '1' , title : 'product1'},
  { id: '2' , title : 'product2'},
  { id: '3' , title : 'product3'},
 ])

 return (
  <>
  <hr/>
  <h4>new lesson about State Lifting Up, Props Drilling, Context API, Recoil</h4>
  <br/>
 <div className="App">
  <ProductsConText.Provider value={product}>
   {/* <NavbarStateLifting count= {product.length}/> */}
   <NavbarStateLifting />
   <ProductlistStateLifting />
   <NavbarStateLifting.toggle/>
   {/* <ProductlistStateLifting products={product}/> */}

   <Card>
   <Card.Title/>
    <Card.Img src="https://cdn.discordapp.com/attachments/976997461686116412/1084929399922622535/mohamedAli_page_for_cofee_the_background_black_and_i_want_drink_524d4da6-182b-4802-b3fc-348f46151ca9.png"/>
   </Card>
  </ProductsConText.Provider>

<ProductsConText2>
<Try/>
<Card/>
<Card.Title/>

<NavbarStateLifting.toggle/>
</ProductsConText2>

 </div>
  
  </>
 );
}

export default StateLifting;
