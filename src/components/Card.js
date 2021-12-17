import React, { useState } from 'react';
import './Card.css'

export default function Card({ food, incrementCount, decrementCount }) {
    const[count, setCount] = useState(0);

    const onAddCart = () => {
        setCount(prevCount => prevCount + 1);
        incrementCount(food);
    }

    const onRemoveCart = () => {
        setCount((prevCount) => prevCount - 1);
        decrementCount(food);
    }

    return (
        <div className="dishes-container"> 
            <div className="dish-details">
                <p>dish: {food.dish}</p>
                <p>description: {food.description}</p>
                <p>ingredient: {food.ingredient}</p>
                <p>Price: Rs. 100/-</p>
            </div>
            <div className="quantity-container">
                <p className="quantity"> Quantity:</p>
                <div className ="item-count-container">
                    <button onClick={onAddCart} className="add-remove-buttons">+</button>
                    <span className="item-count">{count === 0 ? "Add" : count}</span>
                    {count > 0 && <button onClick={onRemoveCart} className="add-remove-buttons">-</button>}
                </div>
            </div>
        </div>
    )
}
