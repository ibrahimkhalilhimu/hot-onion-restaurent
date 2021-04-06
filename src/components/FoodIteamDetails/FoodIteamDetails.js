import React, { useState } from 'react';
import './FoodIteamDetails.css'
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData/FakeData'
import { useContext } from 'react';
import { userContext } from '../../App';

const FoodIteamDetails = () => {
   const {catagoryName,cartItem}= useContext(userContext)
   const [cart,setCart] = cartItem
   const [isSuccess, setIsSuccess] = useState(false);
    let {id} = useParams()
    const ItemData = fakeData.find(data =>data.id == id)
   const [data,setData] = useState(ItemData)


   const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(prevCount => prevCount + 1);
  };
  const handleDecrement = () => {
      if(quantity > 1){
        setQuantity(prevCount => prevCount - 1);
      } 
  };

const handleCartItem = (data) => {
        const sameProduct = cart.find(pd => pd.id == data.id)   
        let newCart;
     if(sameProduct){
      // quantity = sameProduct.quantity + 1;
       sameProduct.quantity = quantity;
       const others =cart.filter(pd => pd.id !== data.id)  
       newCart = [...others,sameProduct]
       console.log(newCart);
       setIsSuccess(true);
     }
     else{
      data.quantity = quantity;
      newCart = [...cart, data];
     }
     setCart(newCart);
     
}
console.log(cart.length);

    return (
        <div className="container my-5">
            <div className="row foodDetails">
            <div className="col-md-6 py-4">
         <h1>{data.name}</h1><br/>
        <p>{data.details}</p>
       <div className="d-flex">
       <h3>${data.price}</h3>
        <div className="btnSide ml-2">
      
        <FontAwesomeIcon icon={faMinus}
        onClick={handleDecrement}
        className="minus"
        />
        {quantity}
         <FontAwesomeIcon icon={faPlus}
         className="plus"
          onClick={handleIncrement}
         />
    </div>
       </div>
       <div className="pt-2">
         
       <button 
      onClick={() =>handleCartItem(data)}
        className="detailsBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
         {isSuccess &&
                <p className="ml-3 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle} />  Item added to Cart</p>
                         
                        }
       </div>
       
    </div>
            <div className="col-md-6">
                <img className="w-75 pl-5" src={data.img} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default FoodIteamDetails;