import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../../components/ui/Banner'
import { Hero } from '../../components/ui/Hero'
import { FeaturedRooms } from '../ui/FeaturedRooms'
import { Services } from '../ui/Services'
 

export const Home = () => {
    return (
        <>
            <Hero 
                children={
                    <Banner
                        title="luxurious rooms" 
                        subtitle="deluxe rooms starting at $299"
                        children=
                        {
                            <Link to="/rooms" className="btn-primary">
                                our rooms
                            </Link>
                        }
                    />
                }
            />

            <Services/>

            <FeaturedRooms/>

        </>
    )
}
