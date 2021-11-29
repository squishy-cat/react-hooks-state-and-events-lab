import React, { useState } from "react";

function Item({ name, category }) {
  // declare variables for state usage
  let [inCart, setInCart] = useState(false);
  // toggle inCart true/false
  function setCart() {
    setInCart((inCart) => !inCart);
    return inCart;
  }
  

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {setCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
