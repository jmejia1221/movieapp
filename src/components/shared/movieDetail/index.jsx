import React from "react";

// Components
import Button from '../../UI/Button';

// CSS
import styles from './MovieDetail.module.scss';

const MovieDetail = ({ movieDetail, addMovieHandler }) => {
    const img = movieDetail.file?.base64 || movieDetail.image || '';
    const hasMovies = Object.keys(movieDetail);
    return (
        <div className={styles.container}>
            <div className={styles.contentOver}>
                { hasMovies.length ? (
                    <figure>
                        { img && <img src={img} className={styles.img} /> }
                        <figcaption>
                            <h1 className={styles.title}>{movieDetail.title}</h1>
                            <p className={styles.description}>{movieDetail.description}</p>
                            <span className={styles.release}>{movieDetail.release}</span>
                        </figcaption>
                    </figure>
                ) : (
                    <div className={styles.noMovieSelected}>
                        <p>Select a movie</p>
                        <p className={styles.or}>OR</p>
                        <Button
                            classname={styles.buttonAddMovie}
                            onClick={addMovieHandler}>
                            Add Movie
                        </Button>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default MovieDetail;