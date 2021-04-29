import React from "react";

// libraries
import classNames from "classnames";

// CSS
import styles from './MovieItem.module.scss';

const MovieItem = ({ title, release, onClick, active }) => {
    return <>
        <li className={classNames(styles.item, {[styles.active]: active})}
            onClick={() => onClick({title, release})}>
            <h3 className={styles.title}>{title}</h3>
            <span>{release}</span>
        </li>
    </>;
};

export default MovieItem;