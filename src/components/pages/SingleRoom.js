import React, { useContext } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
import {Banner} from '../ui/Banner';
import {Link} from 'react-router-dom';
import {Context} from '../../Context';
import StyledHero from '../ui/StyledHero';

export const SingleRoom = ({match}) => {

    const {getRoom} = useContext(Context);
    const room = getRoom(match.params.slug);

    if(!room){
        return (
            <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">
                Back to rooms
            </Link>
            </div>
        )
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    return (

        <>
            <StyledHero img = {images[0] || defaultBcg } 
                children = {
                    <Banner 
                        title={`${name} room`}
                        children = {
                            <Link to="/rooms" className="btn-primary">
                                back to rooms
                            </Link>
                        }
                    />
                }
            />  

            <section className="single-room">
                <div className="single-room-images">
                    {
                        images.map((item, index) => ( 
                            <img key={index} src={item} alt={name}/>
                        ))
                    }
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3> details </h3>
                        <p> {description} </p>
                    </article>           

                    <article className="info">
                        <h3> info </h3>
                        <h6> <b> price: </b> ${price} </h6>
                        <h6> <b> size: </b> {size} SQFT </h6>
                        <h6> <b>max capacity: </b> {capacity > 1 ? 
                                    `${capacity} people` 
                                        : 
                                    `${capacity} person`
                                    } 
                        </h6>
                        <h6> {pets ? 'pets allowed' : 'no pets allowed'} </h6>
                        <h6> {breakfast && 'free breakfast included'} </h6>
                    </article>         
                </div>
            </section>       

            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {
                     extras.map((item, index) => (
                         <li key={index}> - {item} </li>
                     ))   
                    }
                </ul>
            </section>

        </>
        
    )
}
