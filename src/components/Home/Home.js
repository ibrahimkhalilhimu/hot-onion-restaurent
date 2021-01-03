import React from 'react';
import Banner from '../Banner/Banner';
import FoodItem from '../FoodItem/FoodItem';
import Footer from '../Footer/Footer';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <FoodItem></FoodItem>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </div>
    );
};

export default Home;