import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";

// components
import Button from "../../components/UI/Button";
import MovieList from "../../components/shared/movieList";
import MovieDetail from "../../components/shared/movieDetail";

// CSS
import styles from './Home.module.scss';


const Home = () => {
    const history = useHistory();
    const [movieDetail, setMovieDetail] = useState({});
    const [movieList, setMovieList] = useState([]);

    let addMovieButton = null;
    let movieListContent = null;

    useEffect(() => {
        const movies = localStorage.getItem('movies');
        const moviesToJson = JSON.parse(movies);
        if (movies) setMovieList(moviesToJson);
    }, []);

    const addMovieHandler = () => {
        history.push('/create-movie');
    };

    const showMovieDetail = (movie) => {
        setMovieDetail(movie)
    };

    if (movieList.length) {
        addMovieButton = (
            <Button
                classname={styles.buttonAddMovie}
                onClick={addMovieHandler}>
                Add Movie
            </Button>
        );
        movieListContent = (
            <aside className={styles.aside}>
                <MovieList
                    active={movieDetail.id}
                    onClick={showMovieDetail}
                    list={movieList} />
            </aside>
        );
    }


    return (
        <>
            {addMovieButton}
            <div className={styles.container}>
                {movieListContent}
                <section className={styles.detail}>
                    <MovieDetail
                        addMovieHandler={addMovieHandler}
                        movieDetail={movieDetail} />
                </section>
            </div>
        </>
    );
};

export default Home;