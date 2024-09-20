import { useContext, useState } from 'react';


import { Link } from 'react-router-dom';

import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from '../../context/CartContext';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const initial = {
    email: "",
    name: "",
    phone: "",

}




export function CartForm() {

    const { items, reset } = useContext(CartContext)
    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);


    const [buyer, setBuyer] = useState(initial)

    const handleChange = (evt) => {
        const { target } = evt;
        setBuyer({ ...buyer, [target.name]: target.value })
        console.log(buyer)
    }


    const sendOrder = (evt) => {
        evt.preventDefault();
        const order = {
            buyer,
            items,
            total
        };

        const db = getFirestore();
        const orderColl = collection(db, "orders")

        addDoc(orderColl, order).then(({ id }) => {
            if (id) { alert("Su orden: " + id + " ha sido completada.") }
        }).finally(() => {
            reset();
            setBuyer(initial)
        })
    }

    const len = items.length

    if (len == 0) return (<Container fluid className="text-center">
        <h1>El carrito esta vacio</h1>
        <Link to={"/"}><Button>Volver al inicio</Button></Link>
    </Container>)


    return (
        <Container fluid className="mt-4 row text-center justify-content-center">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name='email' value={buyer.email} onChange={handleChange} />


                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name='name' value={buyer.name} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictel">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" name='phone' value={buyer.phone} onChange={handleChange} />

                </Form.Group>

                <br />
                <h3>Total : ${total}</h3>





                <Button variant="primary" onClick={sendOrder}>
                    Comprar
                </Button>

                <Link to={'/cart'}><Button>
                    Cancelar
                </Button></Link>


            </Form>
        </Container>
    );
}
