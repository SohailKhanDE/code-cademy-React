import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
// declare and initialize state for favorite items
const [cart, setCart] = useState([]);

// Function for adding item into favorites
const addItem = (item) => {
    // create setCart function fot adding item into favorite state
    setCart((prev) => {
      // add item to state sing spread operator method 
      return[item, ...prev];
    });
   };


// Function for removing favorite item from favorite list
  const removeItem = (targetIndex) => {
   // Call function with previous state as argument
   setCart((prev) => {
     // filter out selected item from previous cart items
     // index, targetIndex values from where?? -SK
     return prev.filter((item, index) => index !== targetIndex);   
   })
  };

// return JSX for render
// Create List of Favorite and All Items using Map Prototype
  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
