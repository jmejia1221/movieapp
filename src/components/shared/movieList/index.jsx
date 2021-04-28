import React from "react";
import { v4 as uuid } from 'uuid';

// Components
import MovieItem from "./movieItem";

const MovieList = ({ list = [], onClick }) => {
    const movieList = list.map(movie => {
        return (
            <MovieItem
                key={uuid()}
                onClick={onClick}
                title={movie.title}
                release={movie.release}
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