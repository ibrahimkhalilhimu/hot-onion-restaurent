import React from 'react';
import {  useHistory } from 'react-router-dom';

const Food = (props) => {
    console.log(props.food);
    const {name,body,price,img,id} = props.food
    let history = useHistory();
    const handleClick =(id)=>{
      history.push(`/${id}`)
    }
    return (
    <div onClick={()=>handleClick(id)} className="col-md-4 ">
<div className="card align-items-center pt-5">
     <img style={{width:"100px"}} className="card-img-top img-fluid" src={img} alt="image cannot support"/>
   <div className="card-body "> 
    <h4 className="text-center">{name}</h4>
    <p>{body}</p>
    <h4 className="text-center">${price}</h4>
  </div>
  
</div>
</div>



        
    );
};

export default Food;