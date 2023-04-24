import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './bootstrap/dist/css/bootstrap.min.css';
// import './bootstrap/dist/js/bootstrap.min.js';

// import './bootstrap/dist/css/bootstrap.min.css';
// import './bootstrap/dist/js/bootstrap.min.js';

import Greeting from './components/Greeting';
import Welocme from './components/Welocme';
import Produt from './components/product';
import Form from './components/Form';
import Rendering from './components/ٌٌRendering';
import Lists from './components/Lists';
import ProductList from './components/ProductList';
import Counter from './components/Counter';
import ConterFc from './components/ConterFc';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductList2 from './components/ProductList2';
import Home from './home';
import ProdutDetalis from './ProdutDetalis';
// import Poduct2 from './components/Poduct2';
// import Sidebar from './components/Sidebar';
import Practice3 from './Practice3';
import Products3 from './components/Products3';
import Home2 from './Home2';
import AddProducts from './components/AddProducts';
import ProdutDetalis2 from './ProdutDetalis2';

// import { Routes , Route } from 'react-router-dom';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:   <Home/>,
  },

  {
    path: "/practice",
    element: <>
          <Navbar/>
    <Greeting name="mohamed" age="25" job="front-end"/>
          <Greeting name="omar" age="20" job="back-end"/>
          <Welocme name="ali" title="js" />
          <Welocme name="mona" title="dev"/>
          <Produt title="product-1" description="the best car" number="500" />
          <Produt title="product-2" description="the best t-shirt" number="100" />
          <Form/>
          <Rendering/>
          <Lists/>
          <ProductList/>
          <Counter/>
        <ConterFc/>
    </>,
  },

  // {
  //   path: "product",
  //   element:   <Poduct2 />,
  // },

  {
    path: "product/:productid",
    element:   <ProdutDetalis/>,
  },

  {
    path: "/Practice3",
    element:   <Practice3/>,
  },

  {
  //   path: "/Practice3",
  //   element:   <>
  //            <Navbar/>
  //  <div className="row">
  //   <div className="col-2 sidebar">
  //      <Sidebar/>
  //   </div>

  //   <div className="col-10">
  //     <Home2/>
  //     {/* <Products3/> */}
  //     <Routes>
  //      <Route path ="/Home2" element={ <Home2/>} />
  //      <Route path ="/Products3" element={ <Products3/>} />
  //      <Route path ="/add" element={ <AddProducts/>} />
  //     </Routes>
  //    </div>
     
  //  </div>
  //              </>,
  },

  {
    path: "/Home2",
    element:   <Home2/>,
  },

  {
    path: "/products/add",
    element:   <AddProducts/>,
  },

  
  {
    path: "/Products3",
    element:   <Products3/>,
  },

    
  {
    path: "/Products3/:productid",
    element:   <ProdutDetalis2/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <React.StrictMode>
   <RouterProvider router={router} />
   
   <App/>

 </React.StrictMode>

);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
    
//     <App/>
 
//   </React.StrictMode>
// );

// reportWebVitals();
