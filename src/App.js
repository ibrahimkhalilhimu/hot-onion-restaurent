import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';
import FoodIteamDetails from './components/FoodIteamDetails/FoodIteamDetails';
import Delivery from './components/Delivery/Delivery';
import LogIn from './components/LogIn/LogIn';
import Location from './components/Location/Location';



function App() {
  return (
    <div >

      
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/delivery">
            <Delivery></Delivery>
          </Route>
          <Route path="/location">
            <Location/>
          </Route>
          <Route path="/:id">
            <FoodIteamDetails></FoodIteamDetails>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
         <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
