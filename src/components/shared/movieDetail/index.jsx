import React from "react";

// CSS
import styles from './MovieDetail.module.scss';

const MovieDetail = ({ movieDetail }) => {
    const img = movieDetail.file?.base64 ? movieDetail.file.base64 : '';
    return (
        <div className={styles.container}>
            <div className={styles.contentOver}>
                <figure>
                    <img src={img} className={styles.img} />
                    <figcaption>
                        <h1 className={styles.title}>{movieDetail.title}</h1>
                        <p className={styles.description}>{movieDetail.description}</p>
                        <span className={styles.release}>{movieDetail.date}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MovieDetail;