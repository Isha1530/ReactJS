import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        const item = { name: props.name, price: Number(props.price) };
        addItem(item);
    };

    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price - ${props.price}</p>
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default Item;
