import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create-movie">Add movie</NavLink>
                </li>
                <li>
                    <NavLink to="/top-movies">Top 5 movies</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;