import { useContext, useState } from 'react';

import { CartContext } from '../../context/CartContext';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const initial = {
    email:"",
    name:"",
    phone:"",

}

export function CartForm() {

    const {reset} = useContext(CartContext)
    const [buyer, setBuyer] = useState(initial)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email"  />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasictel">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" />
            </Form.Group>



            <Button variant="primary" type="submit" >
                Comprar
            </Button>

            <Button variant="primary" onClick={reset}>
                Vaciar
            </Button>


        </Form>
    );
}
    