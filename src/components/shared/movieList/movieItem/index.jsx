import React from "react";

const MovieItem = ({ title, release, onClick }) => {
    return (
        <>
            <li onClick={() => onClick({title, release})}>
                <h3>{title}</h3>
                <span>{release}</span>
            </li>
        </>
    );
};

export default MovieItem;