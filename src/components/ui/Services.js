import React, { useState } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export const Services = () => {

    const initialState = [{
        icon: <FaCocktail/>,
        title: 'Free Cocktails',
        info: 'We have very good cocktails for free!'
    },
    {
        icon: <FaHiking/>,
        title: 'Endless Hiking',
        info: 'You can hiking near from here'
    },
    {
        icon: <FaShuttleVan/>,
        title: 'Free Shuttle',
        info: 'With our free shuttle you can go to other nice sites around'
    },
    {
        icon: <FaBeer/>,
        title: 'Strongest Beer',
        info: 'You have never had a beer so strong'
    }
    ]

    const [services] = useState(initialState);

    return (
        <section className="services">
            <Title title="services"/>

            <div className="services-center">
                {
                    services.map((item, index) => 
                    <article key={index} className="service">
                        <span> {item.icon} </span>
                        <h6> {item.title} </h6>
                        <p> {item.info} </p>
                    </article>
                    )
                }
            </div>
        </section>
    )
}
