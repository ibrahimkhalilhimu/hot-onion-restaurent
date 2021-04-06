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
import { createContext } from 'react';

export const userContext = createContext()

function App() {
  const [catagory,setCatagory] = useState('Lunch')
  const [food,setFood]=useState([])
  const [cart,setCart]=useState([])
  const [fromData,setFromData] = useState({})
 
  return (
    <div >
       <userContext.Provider value={{catagoryName:[catagory,setCatagory],foodItem:[food,setFood],cartItem:[cart,setCart],formDataAll:[fromData,setFromData]}}>
      <Router>
        <Header />
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
            <FoodIteamDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
         <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
