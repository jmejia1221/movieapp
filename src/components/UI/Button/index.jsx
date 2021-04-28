import React from "react";

// CSS
import styles from './Button.module.scss';

const Button = ({ children, onClick, classname }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.container} ${classname}`}>
            {children}
        </button>
    );
};

export default Button;