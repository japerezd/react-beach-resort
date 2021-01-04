import React, { useContext } from 'react';
import { Context } from '../../Context';
import { Loading } from './Loading';
import {Room} from '../ui/Room';
import Title from './Title';

export const FeaturedRooms = () => {

    let {configRooms:{featuredRooms, loading}} = useContext(Context);

    featuredRooms = featuredRooms.map(room => {
        return <Room key={room.id} room = {room} /> 
    })

    return (
        <section className="featured-rooms">
           <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : featuredRooms }
            </div>

        </section>
    )
}
