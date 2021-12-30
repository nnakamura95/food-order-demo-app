import React from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClose}/>
    );
};

export default Backdrop;
