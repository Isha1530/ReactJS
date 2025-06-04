import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {props.children}
        </CartContext.Provider>
    );
};
