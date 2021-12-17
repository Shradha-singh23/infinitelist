import React, { useEffect, useState } from "react";
import { Waypoint } from 'react-waypoint';
import Card from "./components/Card";
import Header from "./components/Header";
import './App.css'

const BASE_URL = "https://random-data-api.com/api/food/random_food?size=5"

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [cart, setCart] = useState([]);
  const subTotal = cart.reduce((prevValue, item) => prevValue + item.price * item.quantity, 0)

  async function fetchCard(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setResults(prevResult => [...prevResult, ...data]);
    setLoading(false);
  }

  const loadMoreContent = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1)
  }
  
  useEffect(() => {
    fetchCard();
  }, [page])

  const incrementCount = (food) => {
    const exist = cart.find((item) => item.id === food.uid);
    if (exist) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((_item) => {
          const item = { ..._item };
          if (item.id === food.uid) {
            item.quantity = item.quantity + 1;
          }
          return item;
        });
        return updatedCart;
      });
    } else {
      const newItem = {
        id: food.uid,
        name: food.dish,
        price: 100,
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const decrementCount = (food) => {
    const exist = cart.find((item) => item.id === food.uid);
    if (exist.quantity === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== food.uid));
    } else {
      setCart((prevCart) => {
        return prevCart.map((_item) => {
          const item = { ..._item };
          if (item.id === food.uid) {
            item.quantity--;
          }
          return item;
        });
      });
    }
  };

  const cCards = results.map((result) => {
    return (
      <Card 
        food={result} 
        key={result.id} 
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    )
  })

  return (
    <div>
      <Header />
      <section className="main-container">
        <div className="menu-container">
            <h2 className="menu-heading">Menu</h2>
            <hr className="heading-horizontal-line"/>
            {cCards}
            {loading 
              ? <p>Loading more data...</p> 
              : <Waypoint
                  onEnter={loadMoreContent}
                />
            }
        </div>  
        <div className="cart-container">
            <h2 className="menu-heading">Your Orders</h2>
            <hr className="heading-horizontal-line"/>
            {cart.length === 0 && <span className="dish-title">Cart is Empty</span>}
            {cart.map((item) => {
              return(
                  <div key={item.id} className="cart-quantity-container">
                      <p className="dish-title">{item.name}</p>
                      <span className="cart-quantity-item-price">Price: {item.price} * {item.quantity}</span>
                      <span className="cart-quantity-item-price"> = Rs. {item.price*item.quantity}</span>
                  </div>)    
            })} 
            <hr className="heading-horizontal-line"/>
            <div className="subTotal-container">
                <h2 className="heading">Sub Total:</h2>
                <span className="total-amount"> Rs. {subTotal} </span>
            </div>
        </div>  
      </section>         
    </div>
  );
}

export default App;
