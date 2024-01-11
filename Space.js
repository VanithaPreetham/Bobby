import React from 'react';
import { BrowserRouter as Router, Route, Switch } from './space';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import Authentication from './Authentication';
const Space = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/login" component={Authentication} />
      </Switch>
    </Router>
  );
};

export default Space;
