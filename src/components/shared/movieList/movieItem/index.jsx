import React from "react";

// libraries
import classNames from "classnames";

// CSS
import styles from './MovieItem.module.scss';

const MovieItem = ({ movie, onClick, active }) => {
    const { title, release, id, image } = movie;

    return <>
        <li className={classNames(styles.item, {[styles.active]: id === active, [styles.nopointer] : image})}
            onClick={() => onClick(movie)}>
            <div className={styles.image}>
                { image && (
                    <img src={image} />
                )}
            </div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <span>{release}</span>
            </div>
        </li>
    </>;
};

export default MovieItem;