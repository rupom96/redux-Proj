import React from 'react';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeBikes from '../HomeBikes/HomeBikes';
import Reviews from '../Reviews/Reviews';




const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <HomeBikes></HomeBikes>

            <Reviews></Reviews>
            <Contact></Contact>

        </div>
    );
};

export default Home;