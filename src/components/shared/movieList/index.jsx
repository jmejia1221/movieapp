import React from "react";
import { v4 as uuid } from 'uuid';

// Components
import MovieItem from "./movieItem";

const MovieList = ({ list = [], onClick, active }) => {
    const movieList = list.map(movie => {
        return (
            <MovieItem
                key={uuid()}
                active={active}
                onClick={onClick}
                movie={movie}
            />
        );
    });

    return (
        <ul>
            {movieList}
        </ul>
);
};

export default MovieList;