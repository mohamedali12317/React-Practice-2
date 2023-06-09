import React from 'react';

import { NavLink } from "react-router-dom";

const Navbar = () => {
 return (
  <>
   {/* this one from bootstrap */}
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Practice3" >Home2</NavLink>
        </li>    
        <li className="nav-item">
          <NavLink className="nav-link"  to="/practice" >practice</NavLink>
        </li>    
        <li className="nav-item">
          <a className="nav-link"  href="https://github.com/mohamedali12317/React-Practice-Project" target="_blank" >practice2</a>
        </li>    
        <li className="nav-item">
          <NavLink className="nav-link"  to="/Practice3" >practice 3</NavLink>
        </li>  
      </ul>
     
    </div>
  </div>
</nav>

  </>
 );
}

export default Navbar;
