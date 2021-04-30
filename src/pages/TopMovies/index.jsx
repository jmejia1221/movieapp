import React, { useEffect, useState } from "react";

// Components
import MovieList from "../../components/shared/movieList";
import Loader from "../../components/UI/Loader";

// CSS
import styles from './Topmovies.module.scss';

const TopMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch('http://www.mocky.io/v2/5dc3c053300000540034757b')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoader(false);
                setMoviesData(data.movies);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Top Movies</h1>
            { loader ? (<Loader />) : (<MovieList list={moviesData} />) }
        </div>
    );
};

export default TopMovies;