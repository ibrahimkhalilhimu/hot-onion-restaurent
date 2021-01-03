import React from 'react';
import group1151 from '../../Image/Group 1151.png'
import './Location.css'
const Location = () => {
    return (
        <div className="container">
          <div className="py-5">
              <div className="row mt-3">
              <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29210.416357438273!2d90.3702476!3d23.7722563!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1609417996318!5m2!1sen!2sbd" width="600" height="550" frameborder="0" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div className="col-md-6 otherSide">
                <div className="">
                    <img style={{width:"100px"}} src={group1151} alt=""/>
                </div>
              </div>
              </div>
              </div>  
        </div>
    );
};

export default Location;