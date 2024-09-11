import { useContext } from "react";
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { CartContext } from "../../context/CartContext";
import { CartItemDetail } from "./CartItemDetail";
import { CartForm } from "./CartForm";

export const Cart = () => {
    const { items, reset } = useContext(CartContext)
    const len = items.length

    if (len == 0) return (<Container fluid className="text-center">
        <h1>El carrito esta vacio</h1>
        <Link to={"/"}><Button>Volver al inicio</Button></Link>
        </Container>)



    return (
        <Container fluid className="mt-4 row text-center justify-content-center" id="container">
            <h1>Carrito de compras</h1>
            {items.map((i) => {
                return (
                    <CartItemDetail item={i} key={i.id} />
                )
            })}

            <Container>
                <Link to={'/cartForm'}>
                    <Button variant="primary" type="submit" >
                        Finalizar la comprar
                    </Button>
                </Link>

                <Button variant="primary" onClick={reset} >
                    Vaciar carrito
                </Button>
            </Container>

        </Container>
    )

}

