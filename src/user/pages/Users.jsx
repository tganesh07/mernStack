import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            image: 'https://images.pexels.com/photos/3261007/pexels-photo-3261007.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            name: 'Thulasi Ganesh',
            places: 3
        }
    ];

    return  <UsersList items={USERS} />;
};

export default Users;