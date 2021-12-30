import React, {useRef, useState} from "react";
import styles from "./FoodItemForm.module.css";
import Input from "../../UI/Input";

const FoodItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitForm = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length ===0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };


    return (
        <form className={styles.form} onSubmit={submitForm}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1"
                }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount.</p>}
        </form>
    );
};

export default FoodItemForm;
