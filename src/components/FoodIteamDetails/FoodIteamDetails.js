import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData/FakeData'

const FoodIteamDetails = () => {
    let {id} = useParams()
    const ItemData = fakeData.find(data =>data.id == id)
   const [data,setData] = useState(ItemData)
   let history = useHistory()
        const handleClick =()=> {
            history.push('/logIn')
        }
    return (
        <div className="container pt-5">
            <div className="row py-5">
            <div className="col-md-6 pt-4">
         <h1>{data.name}</h1><br/>
        <p>{data.details}</p>
        <h3>${data.price}</h3><br/>
        <button onClick={handleClick} id="signIn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
            </div>
            <div className="col-md-6">
                <img className="w-75 pl-5" src={data.img} alt=""/>
            </div>
            </div>

        </div>
    );
};

export default FoodIteamDetails;