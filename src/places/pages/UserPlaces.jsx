import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u1'
    },
    {
        id: 'p2',
        title: ' State Building',
        description: 'Famous Skyscrappers',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: 'New York',
        location: {
            lat: 0.0,
            lng: 1.0
        },
        creatorId: 'u2'
    }
]
const UserPlaces = () => {

    const userId        = useParams().userId; // Retrieves the url parameters like userId, etc.
    const usersPlaces   = DUMMY_DATA.filter(place => place.creatorId === userId); // filtering the specific user using login info

    return <PlaceList  items={usersPlaces}/>;
};

export default UserPlaces;