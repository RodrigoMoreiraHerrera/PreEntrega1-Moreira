import { useContext } from "react";

import { Container } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";
import { CartItemDetail } from "./CartItemDetail";
import { CartForm } from "./CartForm";

export const Cart = () => {
    const { items, reset } = useContext(CartContext)
    return (
        <Container className="mt-4 row" id="container">
            <h1>Carrito de compras</h1>
            {items.map((i) => {
                return (
                    <CartItemDetail item={i} key={i.id}/>
                )
            })}

        <CartForm />
        </Container>
    )

}

