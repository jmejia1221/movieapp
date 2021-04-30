import React from 'react';

// CSS
import styles from './Textarea.module.scss';

const Textarea = ({ placeholder, onchange }) => {
    return (
        <textarea
            onChange={onchange}
            placeholder={placeholder}
            className={styles.textarea} />
    );
};

export default Textarea;