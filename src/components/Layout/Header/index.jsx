import React from "react";

// components
import Navigation from "./Navigation";

// CSS
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <Navigation />
        </header>
    );
};

export default Header;