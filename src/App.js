// import logo from './logo.svg';
// import './App.css';
import Greeting from './components/Greeting';
import Welocme from './components/Welocme';
import Produt from './components/product';
import Form from './components/Form';
import Rendering from './components/ٌٌRendering';
import Lists from './components/Lists';
import ProductList from './components/ProductList';
import Counter from './components/Counter';
import ConterFc from './components/ConterFc';
// import ProductsData from './ProductsData.js';

function App() {
  return (
    <div className="App">
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
      {/* <ProductsData/> */}
      <Counter/>
      <ConterFc/>


    </div>
  );
}

export default App;
