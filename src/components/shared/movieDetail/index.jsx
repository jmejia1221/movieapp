import React from "react";

const MovieDetail = ({movieDetail}) => {
    return (
        <>
            <h1>{movieDetail.title}</h1>
            <span>{movieDetail.release}</span>
        </>
    );
};

export default MovieDetail;