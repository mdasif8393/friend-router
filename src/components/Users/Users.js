import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css'

const Users = (props) => {
    
    const {name, email, id} = props.user;

    return (
        <div className="users">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <Link to={'/user/'+id}> <button>See more</button> </Link>
        </div>
    );
};

export default Users;