import React from "react";
import foodImage from "../../assets/meals.jpeg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderButton onClick={props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={foodImage} alt="A full of meals on the table"/>
            </div>
        </React.Fragment>
    );
};

export default Header;
