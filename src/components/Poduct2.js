import React from 'react';
// import images1 from './images/ecomblog.jpg';
import { Link } from 'react-router-dom';


const Poduct2 = (props) => {
  console.log(props);

  const {product , showButton} = props;
  
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

         <p>price {product.price}$</p>

         {/* انا بقول لو فى شو بوتون اظهر لى البتون دا */}
         {/* {showButton && <button href="#" className="btn btn-primary"> Deatails</button> } */}

        {/* <button href="#" className="btn btn-primary"> Deatails</button> */}

        {/* {showButton && <Link to={'/Produt/${Produt.id}'} className="btn btn-primary"> Deatails</Link> } */}

        {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary"> Deatails</Link> }
      {/*  {` / ... / ${.id} `}  */}

      </div>  
    </div>
    
  </>
 );
}

export default Poduct2;
