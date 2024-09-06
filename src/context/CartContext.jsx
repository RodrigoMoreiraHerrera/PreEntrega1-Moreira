import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({children}) => {
    const [items, setItems] = useState([]);

    const reset = () => setItems([]);

    const addItem = (item) => {
        const exist = items.some((i)=>i.id === item.id)

        if (exist) {
            const index = items.findIndex((i) => i.id === item.id);
            items[index].quantity += item.quantity;
            setItems([...items]);
        } else {
            setItems([...items, item]);
        }
    }

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }


    return (
        <CartContext.Provider value={{items, reset, addItem, removeItem}}>{children}</CartContext.Provider>
    );
};