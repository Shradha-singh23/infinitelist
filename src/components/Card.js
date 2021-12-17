import React, { useState } from 'react';
import './Card.css'

export default function Card({ food, cart, setCart }) {
    const[count, setCount] = useState(0);

    const onAddCart = () => {
        console.log("here!")
        setCount(prevCount => prevCount + 1);
        const exist = cart.find(item => item.id === food.uid);
        if(exist){
            // debugger;
            setCart(prevCart => {
                const updatedCart = prevCart.map(item => {
                    console.log(item);
                    if(item.id === food.uid){
                        item.quantity++;
                    }
                    return item;
                })
                return updatedCart;
            })
        } else {
            const newItem = {
                id: food.uid,
                name: food.dish,
                price: 100,
                quantity: 1
            }
            setCart((prevCart) => [...prevCart, newItem])
        }
    }

    const onRemoveCart = () => {
        setCount((prevCount) => prevCount - 1)
        const exist = cart.find((item) => item.id === food.uid)
        if(exist.quantity === 1) {
            setCart((prevCart) => prevCart.filter((item) => item.id !== food.uid))
        } else{
            setCart((prevCart) => {
                return prevCart.map((item) => {
                    if (item.id === food.uid){
                        item.quantity--
                    }
                    return item;
                })
            })
        }
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
