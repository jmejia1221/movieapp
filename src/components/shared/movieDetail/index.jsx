import React from "react";

// CSS
import styles from './MovieDetail.module.scss';

const MovieDetail = ({movieDetail}) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentOver}>
                <figure>
                    <img className={styles.img} />
                    <figcaption>
                        <h1 className={styles.title}>{movieDetail.title}</h1>
                        <p className={styles.description}>Description</p>
                        <span className={styles.release}>{movieDetail.release}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MovieDetail;