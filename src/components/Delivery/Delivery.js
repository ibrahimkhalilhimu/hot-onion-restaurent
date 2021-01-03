import React from 'react';
import './Deliver.css'

const Delivery = () => {
    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-md-5">
                   <h3 >Edit Delivery Details</h3>
                   <hr style={{borderBottom:"2px solid gray"}}/>
                   <form className="py-4">
              <input type="text"className="input"placeholder="Deliver to Door" /><br/><br/>
              <input type="text" name="" className="input"placeholder="107 Road No 8" /><br/><br/>
              <input type="text" name="" className="input" placeholder="Flat,Suite or floor" /><br/><br/>
              <input type="text" name="" className="input" placeholder="Business Names"/><br/><br/>
              <input type="text" name="" className="input" placeholder="Add delivery instructor"/><br/><br/>
              <input className="submit-btn " type="submit" value="Save $ Continue"/><br/><br/>
          </form>
                </div>
                <div className="col-md-7 " >
                    <div  id="textSide">
                    <h4> From Gulshan Plazza GPR</h4>
                    <h6>Arriving in 20-30 minutes</h6>
                    <br/>
                    <h5>Subtotal:</h5>
                    <h5>Tax:</h5>
                    <h5>Deliver free:</h5>
                    <h5>Total:</h5>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Delivery;