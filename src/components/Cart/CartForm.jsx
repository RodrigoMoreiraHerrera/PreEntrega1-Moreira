import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const initial = {
    email:"",
    name:"",
    phone:"",

}

export function CartForm() {

    
    const [buyer, setBuyer] = useState(initial)

    const handleChange = (evt) => {
        const {target} = evt;
        setBuyer({...buyer, [target.name]: target.value})
        console.log(buyer)
    }

    const sendOrder = (evt) => {
        evt.preventDefault();
        console.log(buyer);
    }

    

    return (
        <Container fluid className="mt-4 row text-center justify-content-center">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name='email' onChange={handleChange} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name='name' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasictel">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" name='phone' onChange={handleChange} />
            </Form.Group>



            <Button variant="primary" type="submit" onClick={sendOrder}> 
                Comprar
            </Button>

            <Link to={'/cart'}><Button>
                Cancelar
            </Button></Link>


        </Form>
        </Container>
    );
}
    