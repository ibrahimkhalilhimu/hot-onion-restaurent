import React from 'react';
import './Banner.css'
import FakeData from '../../fakeData/FakeData';


const Banner = () => {
    const [searchQuery , setSearchQuery] = React.useState(null)
    const getQuery = e => setSearchQuery(e.target.value);
    console.log(searchQuery);
    return (
        <div className='background'>
          <div className="bannerSide">
              <h1 >Best food waiting for your belly</h1>
              <div className="py-3">
                  <form>
             <input className="inputText" type="text"
          id="query" onChange={getQuery}
        placeholder="Search food items"/>
             <input className="inputBtn" type="submit" value="Search"/>
             </form>
             </div>
        </div>
        </div>
    );
};

export default Banner;