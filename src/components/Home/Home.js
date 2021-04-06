import React from 'react';
import Banner from '../Banner/Banner';
import FoodItem from '../FoodItem/FoodItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
           {/* <Header/> */}
            <Banner></Banner>
            <FoodItem></FoodItem>
            <WhyChoose></WhyChoose>
           
        </div>
    );
};

export default Home;