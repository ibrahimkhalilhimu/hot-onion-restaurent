import React, { useState } from 'react';
import './FoodIteamDetails.css'
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData/FakeData'

const FoodIteamDetails = (props) => {
   
    let {id} = useParams()
    const ItemData = fakeData.find(data =>data.id == id)
   const [data,setData] = useState(ItemData)
  

        const [count, setCount] = useState(1);
        // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
      if(count > 1){
        setCount(prevCount => prevCount - 1);
      } 
  };



    return (
        <div className="container pt-5">
            <div className="row py-5">
            <div className="col-md-6 pt-4">
         <h1>{data.name}</h1><br/>
        <p>{data.details}</p>
       <div className="d-flex">
       <h3>${data.price}</h3>
        <div className="btnSide ml-2">
      
        <FontAwesomeIcon icon={faMinus}
        onClick={handleDecrement}
        className="minus"
        />
        {count}
         <FontAwesomeIcon icon={faPlus}
         className="plus"
          onClick={handleIncrement}
         />
    </div>
       </div>
        <br/>
        <button 
        onClick={() => props.handleProduct(data.id)}
        className="detailsBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
            </div>
            <div className="col-md-6">
                <img className="w-75 pl-5" src={data.img} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default FoodIteamDetails;