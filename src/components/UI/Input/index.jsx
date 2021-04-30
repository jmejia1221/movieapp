import React from "react";

// CSS
import styles from './Input.module.scss';

const Input = ({ type, classname, placeholder, name, onChange }) => {
    return (
        <input
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`${classname} ${styles.input}`}
            type={type} />
    );
};

export default Input;