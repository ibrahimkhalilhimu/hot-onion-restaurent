import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/LoginPage/SignIn/SignIn';
import Header from './components/Header/Header';
import FoodIteamDetails from './components/FoodIteamDetails/FoodIteamDetails';
import Delivery from './components/Delivery/Delivery';
import LogIn from './components/LoginPage/LogIn/LogIn';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import fakeData from './fakeData/FakeData'


function App() {

  const [cart,setCart] = useState([])
const handleProduct =(id)=>{
const product = fakeData.filter(pd=>pd.id ===id)
const newCart = {cart:[...cart,product]}
console.log(newCart);
setCart(newCart);
}
  return (
    <div >
      
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/logIn">
            <Header/>
            <LogIn></LogIn>
          </Route>
          <Route path="/signIn">
          <Header/>
            <SignIn></SignIn>
          </Route>
          <Route path="/delivery">
          <Header/>
            <Delivery></Delivery>
          </Route>
          <Header/>
          <Route path="/location">
            <Location/>
          </Route>
          <Route path="/:id">
          <Header cart={cart}/>
            <FoodIteamDetails cart={cart} handleProduct={handleProduct}/>
          </Route>
          <Route exact path="/">
            <Header/>
            <Home></Home>
          </Route>
         <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
