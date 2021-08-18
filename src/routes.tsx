
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Base from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import SingIn from './pages/login/cadastro';
import Products from './pages/products/products';
import EditProduct from './pages/products_edit/products_edit';
import ProductCard from './pages/products/product_cards';

export default function Routes(){
  return(

    <BrowserRouter>
    
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/dashboard/dashboard" exact component={Base}/>
      <Route path="/login/singin" exact component={SingIn}/>
      <Route path="/products/products" exact component={Products}/>
      <Route path="/EditProduct/EditProduct" exact component={EditProduct}/>
      <Route path="/products/ProductCard" exact component={ProductCard}/>
      </Switch>
    </BrowserRouter>
  );
}