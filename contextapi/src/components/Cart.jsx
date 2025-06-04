import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            <h4>Total Items: {items.length}</h4>
            <h4>Total Bill: ${total}</h4>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
