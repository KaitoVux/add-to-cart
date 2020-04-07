import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProDucts from "./pages/Products";

import Menu from "./Components/TopMenu";

import { CartProvider } from "./Contexts/Cart";

export default function App() {
  function Home() {
    return <h2>Home</h2>;
  }

  function Contact() {
    return <h2>Contact</h2>;
  }
  return (
    <CartProvider>
      <div className="App">
        <Menu />
        <Router>
          <Switch>
            <Route path="/products">
              <ProDucts />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}
