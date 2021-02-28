import React, { createContext, useContext, useEffect, useState } from 'react';
import FakeData from '../../fakeData/FakeData';
import Food from '../Food/Food';
import './FootItem.css'


const FoodItem = () => {


const [catagory,setCatagory] = useState('Lunch')
const [food,setFood]=useState([])



    useEffect(()=>{
       
        const matchFood = FakeData.filter(pd=>pd.Catagory === catagory)
        setFood(matchFood)
       
    },[catagory])

 
    
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
    <button className="disabled" >Checkout Your Food</button>
    </div>
   </div>
                  
    
    );
};

export default FoodItem;