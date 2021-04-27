import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>This is home</h1>
            <NavLink to="/create-movie">Add Movie</NavLink>
        </>
    );
};

export default Home;