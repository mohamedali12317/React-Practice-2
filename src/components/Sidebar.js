import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 return (
  <>
   <ul className="list-unstyled">
     <li>
      <Link to="/Products3">Get All Products</Link>
     </li>

     <li>
      <Link to="/Categories">Get All Categories</Link>
     </li>

   </ul>
  </>
 );
}

export default Sidebar;
