import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../../components/ui/Banner';
import { Hero } from '../../components/ui/Hero';
import { RoomContainer } from '../RoomContainer';

export const Rooms = () => {
    return (
        <>
            <Hero 
                hero="roomsHero"
                children={
                    <Banner 
                        title="our rooms"
                        children={
                            <Link to="/" className="btn-primary">
                                return home
                            </Link>
                        }
                    />
                }
            />

            <RoomContainer />
        </>
        
    )
}
