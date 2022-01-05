import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Shop/Shop';
import Dasboard from './Components/Dashboard/MyDashbord/MyDeshbord';
import PageNotFound from './Components/PageNotFound/PageNotFound';
// import Login from './Components/Login/Login';
import Login from './Components/Login/Login/Login';
import PrivetRouter from './Components/Login/PrivateRouter/PrivetRouter';
import Regester from './Components/Login/Regester/Regester';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exict path="/home">
              <Home />
            </Route>
            <Route exict path="/cart">
              <Cart />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            {/* <PrivetRouter path="/ordarplace/:productId">
          <OrderPlace />
        </PrivetRouter>  */}
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/ordarplace">
          <OrderPlace />
        </Route> */}
            <PrivetRouter path="/dashboard">
              <Dasboard />
            </PrivetRouter>
            <Route path="/regester">
              <Regester />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
            <Footer></Footer>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
