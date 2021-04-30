import React from "react";

// libraries
import classNames from "classnames";

// CSS
import styles from './MovieItem.module.scss';

const MovieItem = ({ movie, onClick, active }) => {
    const { title, date, id } = movie;

    return <>
        <li className={classNames(styles.item, {[styles.active]: id === active })}
            onClick={() => onClick(movie)}>
            <h3 className={styles.title}>{title}</h3>
            <span>{date}</span>
        </li>
    </>;
};

export default MovieItem;