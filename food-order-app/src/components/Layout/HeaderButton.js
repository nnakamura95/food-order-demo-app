import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
    const [buttonEffect, setButtonEffect] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);


    const buttonStyles = `${styles.button} ${buttonEffect ? styles.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonEffect(true);
        const effectTimer = setTimeout(() => {
            setButtonEffect(false);
        }, 300);

        return () => {
            clearTimeout(effectTimer);
        }
    }, [items]);

    return (
        <button className={buttonStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderButton;
