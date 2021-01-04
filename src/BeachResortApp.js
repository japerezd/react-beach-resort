import './App.css';
import { Context } from './Context';
import { AppRouter } from './routers/AppRouter';
// import items from './data';
import { useEffect, useState } from 'react';
import Client from './Contentful';


const state = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: 'all',
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
}

export const BeachResortApp = () => {

const [configRooms, setConfigRooms] = useState(state);

// const getData = async() => {
//   try {
//     const response = await Client.getEntries({
//       content_type: 'beachResortRoom'
//     });

//     const rooms = formatData(response.items);
//       const featuredRooms = rooms.filter(room => room.featured === true);
//       const maxPrice = Math.max(...rooms.map(room => room.price));
//       const maxSize = Math.max(...rooms.map(room => room.size));

//       setConfigRooms( configRooms => ({
//         ...configRooms,
//         rooms,
//         featuredRooms,
//         sortedRooms: rooms,
//         loading: false,
//         price: maxPrice,
//         maxPrice,
//         maxSize
//       }))

//   } catch (error) {
//     console.log(error)
//   }
// }

const formatData = (items) => {

  return items.map(item => {
    const id = item.sys.id;
    const images = item.fields.images.map(image => image.fields.file.url);

    const room = {...item.fields, id, images};
    return room;
  });

}

const getRoom = (slug) => {
  const tempRooms = [...configRooms.rooms];
  const room = tempRooms.find(temp => temp.slug === slug);
  return room;
}
    

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Client.getEntries({
          content_type: 'beachResortRoom',
          // order: 'sys.createdAt'
          order: 'fields.price'
        });
    
        const rooms = formatData(response.items);
          const featuredRooms = rooms.filter(room => room.featured === true);
          const maxPrice = Math.max(...rooms.map(room => room.price));
          const maxSize = Math.max(...rooms.map(room => room.size));
    
          setConfigRooms( configRooms => ({
            ...configRooms,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
          }))
    
      } catch (error) {
        console.log(error)
      }
    }
    
    getData()
  }, []);


  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value ;
    const name = e.target.name;
    
    setConfigRooms({
      ...configRooms,
      [name]: value
    }
    )
  }

  

  const filterRooms = () => {
    let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = configRooms;
    // all the rooms
    let tempRooms = [...rooms];

    // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if(type !== 'all'){
      tempRooms = tempRooms.filter(temp => temp.type === type);
    }

    // filter by capacity
    if(capacity !== 1)
        tempRooms = tempRooms.filter(temp => temp.capacity >= capacity);

    // filter by price
      tempRooms = tempRooms.filter(temp => temp.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(temp => temp.size >= minSize && temp.size <= maxSize);

    // filter by breakfast
    if(breakfast)
      tempRooms = tempRooms.filter(temp => temp.breakfast === true);

    // filter by pets
    if(pets)
      tempRooms = tempRooms.filter(temp => temp.pets === true);

    return tempRooms;
  }

  const sortedRooms = filterRooms();

  return (

    <Context.Provider value={{configRooms, getRoom, handleChange, sortedRooms}}>
        <AppRouter />
    </Context.Provider>
  );
}

