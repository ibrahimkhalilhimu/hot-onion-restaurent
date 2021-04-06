import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import './Deliver.css';
import { Link } from 'react-router-dom';


const Delivery = () => {

    const {cartItem,formDataAll} = useContext(userContext)
    const [cart,setCart] = cartItem
    const [fromData,setFromData] =formDataAll

    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;

    }
    let shipping = 0;
    if(total > 45){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 10.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data =>{ 
    setFromData(data)
    };

    console.log(fromData);
    return (
        <div className="container py-5">
            <div className="row mt-5 pt-5">
                <div className="col-md-5">
                   <h3 >Edit Delivery Details</h3>
                   <hr style={{borderBottom:"2px solid gray"}}/>
                   <form onSubmit={handleSubmit(onSubmit)} className="pt-4" >
           <div className="form-group">
           <input name="door" className="form-control" placeholder="Deliver to Door" {...register("door", { required: true })}/>
           {/* {errors.door && <span className="error">Door is required</span>} */}

           </div>
           <div className="form-group">
           <input type="text" name="road"  className="form-control" placeholder="107 Road No 8" {...register("road", { required: true })}/>
           {/* {errors.road && <span className="error">road is required</span>} */}
           </div>
           <div className="form-group">
           <input type="text" name="flat"  className="form-control" placeholder="Flat,Suite or floor" {...register("flat", { required: true })}/>
           {/* {errors.door && <span className="error">Door is required</span>} */}
           </div>
              <div className="form-group">
              <input type="text" name="business" className="form-control" placeholder="Business Names" {...register("business", { required: true })}/>
              {/* {errors.door && <span className="error">Door is required</span>} */}
           </div>  
           <div className="form-group">
           <input type="text" name="description" className="form-control" placeholder="Add delivery instructor" {...register("description", { required: true })}/>
           {/* {errors.door && <span className="error">Door is required</span>} */}
               </div>
               <div className="form-group">
               <input className="btn btn-danger btn-block" type="submit" value="Save $ Continue"/>
               </div>
          </form>
                </div>
                <div className="offset-md-1 col-md-6" >
                    <div  id="textSide">
                    <h4> From Gulshan Plazza GPR</h4>
                    <h6>Arriving in 20-30 minutes</h6>
             <div className="checkOutCard">
             {
                   cart.map(item => 
                    <div key={item.id} className=" mb-3 mt-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                    <img width="80px" src={item.img} alt=""/>
                    <div className="">
                        <h6>{item.name}</h6>
                        <h4>{item.price}</h4>
                    </div>
                    <div className="cardButton ml-3">
                   <button className="btn-danger m-2" > +</button>
                <h5>   {item.quantity}</h5>
                   <button className="btn-danger m-2"> -</button>
                    </div>
                </div>)
               }
        
             </div>
                   <div className="">
                  
                  <h5>Subtotal:<span className="d-flex justify-content-end">${total.toFixed(2)}</span></h5>
                    <h5>Tax:<span className="d-flex justify-content-end">{tax}</span></h5>
                    <h5>Deliver free:<span className="d-flex justify-content-end">{shipping}</span></h5>
                    <h5>Total:<span className="d-flex justify-content-end">{grandTotal}</span></h5>
                  </div>
                   {
                       fromData.door?<Link to="/location"> 
                       <button className="btn btn-danger btn-block">Place Oder</button>
                       </Link>:
                       <Link to=""> 
                       <button className="btn btn-danger btn-block " disabled>Place Oder</button>
                       
                       </Link>
                   }
                  
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Delivery;