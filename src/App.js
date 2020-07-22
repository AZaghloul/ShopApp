import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar";
import ProductsList from "./components/productsList";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/not-found";
import About from "./components/about";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/home" exact component={ProductsList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/about" component={About} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
