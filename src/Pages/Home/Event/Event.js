import React from 'react';
import { Tab ,Tabs} from 'react-bootstrap';
import './Event.css'
const Event = () => {
    return (
        <div className="w-50 mx-auto">
            <h3 className="company">Company Profile</h3>
            <Tabs
                defaultActiveKey="Operation"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 mt-3"
                >
                <Tab eventKey="Operation" title="Global Operation">
                    <p>Our Shop in the Car industry for almost ten years now. I thought I’d share some travel hacks with you guys on how to save yourself money while booking travel and ensuring you get the best deal, but also the best value for money. I’ve worked as a travel agent in three different countries. </p>
                </Tab>
                <Tab eventKey="profile" title="News">
                    <p>The preferred destinations might change, but the rules for finding travel deals still remain the same. Travelling is a huge passion of mine. My number one goal as an agent is to have customers who get their best value for money, but also, have a fun and stress-free experience. So let’s check out the travel hacks I’ve learnt through my career.</p>
                </Tab>
                <Tab eventKey="contact" title="Facility">
                    <p>This guide is not just about where to book cheap flights, or what time of year you should be reserving your holiday. Anyone can usually figure out those tricks. This guide is more than that. This is travel industry insider knowledge that you can hopefully use to your advantage. So what are the hacks and how can you save yourself money while booking travel?

                The north side of the plant is government road. Other three sides of the plant is surrounded by natural forest & green field. There is no potential source of dust and smoke from the surrounding area due to green environment. There are no areas of water clogging in the factory premises. The inside roads are of cement for internal transport and the unused land is landscaped. A high brick made wall with metal grills surrounds the manufacturing site.</p>
                </Tab>
                </Tabs>
        </div>
    );
};

export default Event;