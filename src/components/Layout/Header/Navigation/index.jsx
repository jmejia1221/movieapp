import React from 'react';
import { NavLink } from "react-router-dom";

// CSS
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        activeClassName={styles.active}
                        to="/home">
                        Home
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        activeClassName={styles.active}
                        to="/create-movie">
                        Add movie
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        activeClassName={styles.active}
                        to="/top-movies">
                        Top 5 movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;