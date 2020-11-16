import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Shop from './components/shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetaile/ProductDetail';

// import Product from './components/Product/Product'

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>
         
          <Route path="/product/:productKey">
                <ProductDetail></ProductDetail>
          </Route>
          
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

     
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
