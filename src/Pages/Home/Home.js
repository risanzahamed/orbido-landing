import React from 'react';
import Hero from './HomeSections/Hero';
import Features from './HomeSections/Features';
import ClientLogo from './HomeSections/ClientLogo';
import MakePayment from './HomeSections/MakePayment';
import TryOut from './HomeSections/TryOut';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <MakePayment/>
            <ClientLogo/>
            <TryOut/>
        </div>
    );
};

export default Home;