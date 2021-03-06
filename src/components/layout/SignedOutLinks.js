import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/signin'>Create New Field</NavLink></li>
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/signin'>Log In</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;