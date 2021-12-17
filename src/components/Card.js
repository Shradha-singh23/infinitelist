import React from 'react';
import './Card.css'

export default function Card({ food }) {
    return (
        <div className='box'> 
            <p>dish: {food.dish}</p>
            <p>description: {food.description}</p>
            <p>ingredient: {food.ingredient}</p>
            <p>Price: Rs. 100/-</p>
        </div>
    )
}
