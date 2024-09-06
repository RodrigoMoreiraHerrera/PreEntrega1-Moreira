
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from './AddItemButton.jsx'

import { CartContext } from "../../context/CartContext.jsx";

export const ItemQuantitySelector = ({ stock, item }) => {
    const [count, setCount] = useState(1);
    const {addItem} = useContext(CartContext)

    const handleAdd = () => { };
    
    const handleIncrease = () => {
        if (count < stock) {setCount((prev) => prev + 1)};

    };
    
    const handleDecrease = () => {
        if (count > 1) {setCount((prev) => prev - 1)};
    };
    
    const handleAddToCart = () => {
        addItem({...item, quantity: count})
        setCount(1);
        
    }

    
    return (
        <>
            <Button onClick={handleIncrease}>+</Button>
            <Button>{count}</Button>
            <Button onClick={handleDecrease}>-</Button>
            <AddItemButton callBack={handleAddToCart}/>
        </>
    )
};