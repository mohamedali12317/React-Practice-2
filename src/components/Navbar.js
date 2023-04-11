import React from 'react';

const Navbar = () => {
 return (
  <>
   {/* this one from bootstrap */}
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">practice</a>
        </li>    
      </ul>
     
    </div>
  </div>
</nav>

  </>
 );
}

export default Navbar;
