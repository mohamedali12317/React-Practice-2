import React, { useEffect , useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Pages.css'
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'


const Products3 = () => {

  const [products, setproducts] = useState ([]);

  useEffect(() => {
   GetAllProducts ();
   
  
  }, []);


  const GetAllProducts = () => {
    fetch('http://localhost:3000/products')
    .then( res => res.json() ) 
    .then(data => {
      console.log(data);
      setproducts(data)
    } );
  }

  const DeleteProduct = (product) => {

    Swal.fire({
      title: `are u sure to delete  ${product.title} and the Id ${product.id} ? `,
      showCancelButton : true,
    }).then( data => {
    console.log(data);

    if (data.isConfirmed) {
      console.log(product);
    fetch(`http://localhost:3000/products/${product.id}` , {
      method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
      console.log(data);
      GetAllProducts ();
    })
    }
    
    })

    // console.log(product);
    // fetch(`http://localhost:3000/products/${productid}` , {
    //   method: 'DELETE'
    // })
    // .then( res => res.json())
    // .then( data => {
    //   console.log(data);
    //   GetAllProducts ();
    // })
 }


 return (
  <>
  <Navbar/>
   <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>

    <div className="col-10">
    <h1>Products page</h1>

  <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>

    <table className="table table-striped mt-5 products-table">
       <thead>
       <tr>
         <th>Id</th>
         <th>Title</th>
         <th>Description</th>
         <th>Price</th>
         <th>Oprations</th>
        </tr>
       </thead>

       <tbody>
        {products.map((product) => {
           return (
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description.slice(0 , 20)}...</td>
            <td>{product.price}</td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={ () => DeleteProduct(product) } >Delete</button>
              <Link to={`/Products3/${product.id}`} className="btn btn-info btn-sm">View</Link>
              {/* <Link  to={`/Products3/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link> */}
            </td>
            </tr>
           )
        })}
{/* 
          <tr>
            <td>Product 1</td>
            <td>100</td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
              <button className="btn btn-info btn-sm">View</button>
              <button className="btn btn-primary btn-sm">Edit</button>
            </td>
            </tr> */}

       </tbody>
        
    </table>
    <Outlet/>
     </div>
     
   </div>

  </>
 );
}

export default Products3;
