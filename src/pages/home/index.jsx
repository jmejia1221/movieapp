import React, { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useHistory } from "react-router-dom";

import reducer from './reducers/movieListReducer';
import { addMovie } from "./actions/movieListAction";

// components
import Button from "../../components/UI/Button";
import MovieList from "../../components/shared/movieList";
import MovieDetail from "../../components/shared/movieDetail";

// CSS
import styles from './Home.module.scss';

const initialState = {
    movieList: []
};

const Home = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [movieDetail, setMovieDetail] = useState({});

    const movie = () => {
        const payload = {
            id: uuid(),
            title: 'batman11',
            release: '24/25/25'
        };
        addMovie(payload, dispatch)
    };

    const addMovieHandler = () => {
        history.push('/create-movie');
    };

    const showMovieDetail = (movie) => {
        setMovieDetail(movie)
    };

    return (
        <>
            <Button onClick={movie}>Testing</Button>
            <Button
                classname={styles.buttonAddMovie}
                onClick={addMovieHandler}>
                Add Movie
            </Button>
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <MovieList
                        active={movieDetail.id}
                        onClick={showMovieDetail}
                        list={state.movieList} />
                </aside>
                <section className={styles.detail}>
                    <MovieDetail movieDetail={movieDetail} />
                </section>
            </div>
        </>
    );
};

export default Home;