import React from 'react';
// import images1 from './images/ecomblog.jpg';


const Poduct2 = (props) => {
  console.log(props);

  const {product} = props;
  
 return (
  <>
      <div className="card" style={{ width: "18rem" }}>
          <img src= {props.product.image} className="card-img-top" alt="..." />
          <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
         <p className="card-text">
            {product.description}

                {/* or */}

            {/* {props.product.description} */}

         </p>
        <button href="#" className="btn btn-primary">
            Deatails
          </button>
      </div>
    </div>
    
  </>
 );
}

export default Poduct2;
