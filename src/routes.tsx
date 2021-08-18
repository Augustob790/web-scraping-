
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Base from './modules/base/Base';



import Login from './modules/login/logins';
import SingIn from './modules/login/singin';
import Products from './modules/products/Products';
import EditProduct from './modules/EditProduct/EditProduct';
import ProductCard from './modules/products/ProductCard';

export default function Routes(){
  return(

    <BrowserRouter>
    
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/login/singin" exact component={SingIn}/>
      <Route path="/products/products" exact component={Products}/>
      <Route path="/EditProduct/EditProduct'" exact component={EditProduct}/>
      <Route path="/products/ProductCard" exact component={ProductCard}/>
      </Switch>
    </BrowserRouter>
  );
}