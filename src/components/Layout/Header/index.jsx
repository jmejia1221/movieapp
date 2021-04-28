import React from "react";

// components
import Navigation from "./Navigation";
import Logo from "./Logo";

// CSS
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;