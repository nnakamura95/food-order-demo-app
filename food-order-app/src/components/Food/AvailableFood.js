import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AvailableFood.module.css";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";

const DUMMY_FOOD = [
    {
        id: uuidv4().toString(),
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: uuidv4().toString(),
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: uuidv4().toString(),
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: uuidv4().toString(),
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableFood = () => {
    const foodList = DUMMY_FOOD.map((food) => (
        <FoodItem
            id={food.id}
            key={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
        />
    ));

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {foodList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableFood;
