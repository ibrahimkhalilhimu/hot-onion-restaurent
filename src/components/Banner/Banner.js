import React from 'react';
import './Banner.css'



const Banner = () => {
    return (
        <div className='background'>
          <div className="bannerSide">
              <h1 >Best food waiting for your belly</h1>
              <div className="py-3">
                  <form>
             <input className="inputText" type="text" placeholder="Search food items"/>
             <input className="inputBtn" type="submit" value="Search"/>
             </form>
             </div>
        </div>
        </div>
    );
};

export default Banner;