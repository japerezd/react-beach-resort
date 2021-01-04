import React, { useContext } from 'react';
import { Context } from '../Context';
import {RoomFilter} from './RoomFilter';
import {RoomList} from './RoomList';
import { Loading } from './ui/Loading';

export const RoomContainer = () => {

    const {configRooms : {rooms, loading}, sortedRooms} = useContext(Context);

    return (
        <>

            {
                (loading) && <Loading />
            }

            <RoomFilter rooms = {rooms} />
            <RoomList rooms = {sortedRooms} />
        </>
    )
}
