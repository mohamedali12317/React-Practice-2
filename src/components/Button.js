import React from 'react';

const Button = (props) => {
 return (
  <>
   <div className="react-btn">
    <button>{props.title}</button>
   </div>
  </>
 );
}

export default Button;
