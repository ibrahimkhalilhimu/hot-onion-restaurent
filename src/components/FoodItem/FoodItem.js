import React, {  useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import FakeData from '../../fakeData/FakeData';
import Food from '../Food/Food';
import './FootItem.css'


const FoodItem = () => {

const {catagoryName,foodItem,cartItem} = useContext(userContext)
const [catagory,setCatagory] = catagoryName
const [food,setFood]= foodItem
const [cart,setCart]= cartItem
const [disabled,setDisabled]= useState(true)
    useEffect(()=>{
        const matchFood = FakeData.filter(pd=>pd.Catagory === catagory)
        setFood(matchFood)
    },[catagory])

 useEffect(()=>{
     if (cart.length>0) {
         setDisabled(false)
     }
 },[cart])
 
    return (
      
        <div className="container py-5">
   <div className="text-center">
        
     <button onClick={()=>setCatagory('Breakfast')} className={catagory === 'Breakfast' ? 'active btn' : 'btn'} >Breakfast
       </button >
       <button onClick={()=>setCatagory('Lunch')} className={catagory === 'Lunch' ? 'active btn' : 'btn'} >Lunch</button>
        <button onClick={()=>setCatagory('Dinner')} className={catagory === 'Dinner' ? 'active btn' : 'btn'}>Dinner</button>
         
   </div>
   <div className="row pt-5 ">
   {
       food.map(food=><Food food={food} key={food.id}></Food>)

   }
   
   </div>

   <div id="checkOut">
   
    <Link to="/delivery">
    <button 
    className={disabled?"disabled":"btn btn-primary"}
     disabled={disabled}>Checkout Your Food</button>
    </Link>
    </div>
   </div>
                  
    
    );
};

export default FoodItem;