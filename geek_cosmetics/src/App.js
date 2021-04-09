import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Store from "./components/store/shoppingCart";
// import PaymentDetail from "./components/detail/detalleCompra";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tienda" component={Store} />
            {/* <Route exact path="/detalle-compra" component={PaymentDetail} /> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;