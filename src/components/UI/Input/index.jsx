import React from "react";
import classNames from "classnames";

// CSS
import styles from './Input.module.scss';

const Input = ({ type, classname, placeholder, name, onChange, isValid }) => {
    return (
        <input
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={classNames(classname, styles.input, {[styles.error]: !isValid})}
            type={type} />
    );
};

export default Input;