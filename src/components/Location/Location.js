import React from 'react';
import group1151 from '../../Image/Group 1151.png'
import './Location.css'
import group1112 from '../../Image/Group 1152.png'
const Location = () => {
    return (
        <div className="container">
          <div className="pt-5">
              <div className="row mt-3 ">
              <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29210.416357438273!2d90.3702476!3d23.7722563!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1609417996318!5m2!1sen!2sbd" width="600" height="500" frameborder="0" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div className="col-md-6 leftSide">
                <div className="otherSide">
                    <img style={{width:"90px", paddingLeft:"20px",paddingTop:"20px"}} src={group1151} alt=""/>
                    <div className="stepsBar">
                    <div class="timeline-wrapper">
                    <div class="node">
                        <h5>Location</h5>
                        <p>107 Rd No 8</p>
                    </div>
                    <div class="node">
                        <h5>Shop Address</h5>
                        <p>Gulshan Plaza</p>
                    </div>
                    
                </div>
                        
                 </div>
               <div className="pt-2">
               <h3>09:30</h3>
                 <p>Estimated delivery time</p>
               </div>
                 <div className="nameSide">
                     <img style={{width:"50px",height:"50px"}} src={group1112} alt=""/>
                     <div className="pl-2">
                     <h6>Hamim</h6>
                     <p>Your raider</p>
                     </div>
                 </div>
                 <button className="btn btn-danger">Contact</button>
                </div>
              </div>
              </div>
              </div>  
        </div>
    );
};

export default Location;