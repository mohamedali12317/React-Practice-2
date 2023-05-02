import React from 'react';
import anyName from './ProudctsAtom'
// import ProudctsAtom from './ProudctsAtom';
import { useRecoilState } from 'recoil';

const ProductListAtom = () => {
 const [product , setprodut] = useRecoilState(anyName)
 return (
  <>
       {product.map((product) =>
    <h1 key={product.id}>{product.title}</h1>
   )}
   
  </>
 );
}

export default ProductListAtom;
