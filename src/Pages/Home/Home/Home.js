import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Event from '../Event/Event';
import ClientReview from '../Rating/ClientReview';
import Services from './../Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ClientReview></ClientReview>
            <Event></Event>
        </div>
    );
};

export default Home;