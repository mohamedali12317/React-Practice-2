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
