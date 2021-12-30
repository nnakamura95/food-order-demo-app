import React from "react";
import FoodSummary from "./FoodSummary";
import AvailableFood from "./AvailableFood";

const Food = () => {
    return (
        <React.Fragment>
            <FoodSummary/>
            <AvailableFood/>
        </React.Fragment>
    );
};

export default Food;
