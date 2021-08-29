import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './User.css'

const User = () => {

    const {id} = useParams();
    
    const [user, setUser] = useState({});

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res => res.json() )
        .then( data => setUser(data) )
    },[])

    console.log(user)


    return (
        <div className="users">
            <h1>Name: {user.name}</h1>
            <h3>User Name: {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Contact: {user.phone}</h3>
        </div>
    );
};

export default User;