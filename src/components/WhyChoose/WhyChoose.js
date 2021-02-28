import React from 'react';
import './WhyChoose.css'
import image1 from '../../Image/adult-blur-blurred-background-687824.png'
import image2 from '../../Image/chef-cook-food-33614.png'
import image3 from '../../Image/architecture-building-city-2047397.png'
import group204 from '../../ICON/Group 204.png'
import group1133 from '../../ICON/Group 1133.png'
import group245 from '../../ICON/Group 245.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WhyChoose = () => {
    return (
        <div className="container" id="choose">
            <h3>Why you choose us</h3>
            <h5 className="py-4">Barton waited twenty always repair in within we do.An delighted offending curiosity my id dashwoods at.Boy prosperous increasing surrounded. </h5>
            <div className="card-deck">
  <div className="card ">
    <img className="card-img-top" src={image1} alt="Card image cap"/>
    <div className="card-body d-flex">
  
      <img className="groupImg" src={group204} alt=""/>
     
      <div>
      <h5 className="card-title">First Delevery</h5>
      <p className="card-text">Keep your systems in sync with aulomated web hook based notification each time link id paid and how we dreams about our future.</p>
      <b style={{color:"blue"}}>See more  <FontAwesomeIcon icon={faArrowRight}
      /> </b>
      </div>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={image2} alt="Card image cap"/>
    <div className="card-body d-flex">
      <img id="groupImg" src={group1133} alt=""/>
      <div>
      <h5 className="card-title">A Good Auto Respnder</h5>
      <p className="card-text">Keep your systems in sync with aulomated web hook based notification each time link id paid and how we dreams about our future.</p>
      <b style={{color:"blue"}}>See more <FontAwesomeIcon icon={faArrowRight}
      /></b>
      </div>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={image3} alt="Card image cap"/>
    <div className="card-body d-flex">
      <img  src={group245} alt=""/>
      <div>
      <h5 className="card-title">Home Delevery</h5>
      <p className="card-text">Keep your systems in sync with aulomated web hook based notification each time link id paid and how we dreams about our future.</p>
      <b style={{color:"blue"}}>See more <FontAwesomeIcon icon={faArrowRight}
      /></b>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default WhyChoose;