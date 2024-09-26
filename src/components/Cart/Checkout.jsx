import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { getFirestore, collection, addDoc } from "firebase/firestore";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { CartContext } from '../../context/CartContext';

const initial = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    email2: "",
}


export function Checkout() {

    const { items, reset } = useContext(CartContext);
    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);
    const [buyer, setBuyer] = useState(initial);
    const len = items.length;

    const handleChange = (evt) => {
        const { target } = evt;
        setBuyer({ ...buyer, [target.name]: target.value })
    }

    const sendOrder = (evt) => {
        evt.preventDefault();

        if ((buyer.name == "") || (buyer.lastName == "") || (buyer.phone == "") || (buyer.email == "") || (buyer.email2 == "")) {
            alert("Por favor, complete todos los campos");
            return;
        } else {
            if (buyer.email !== buyer.email2) {
                alert("Los correos electrónicos no coinciden");
                return;
            } else {
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
        }
    }



    if (len == 0) return (<Container fluid className="text-center">
        <h1>El carrito esta vacio</h1>
        <Link to={"/"}><Button>Volver al inicio</Button></Link>
    </Container>)


    return (
        <Container fluid className="mt-4 ">
            <div className='cartFormConteiner'>

                <Table striped bordered variant="dark">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((i) => (
                                <tr key={i.id}>
                                    <th>{i.title}</th>
                                    <th>{i.quantity}</th>
                                    <th>$ {i.price * i.quantity}</th>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>TOTAL</td>
                            <td>$ {total}</td>
                        </tr>
                    </tbody>
                </Table>

                <h2>Completa el formulario para finalizar la compra</h2>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name='name' value={buyer.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastlastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name='lastName' value={buyer.lastName} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="tel" name='phone' value={buyer.phone} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" name='email' value={buyer.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail2">
                        <Form.Label>Repite tu email </Form.Label>
                        <Form.Control type="email" name='email2' value={buyer.email2} onChange={handleChange} />
                    </Form.Group>
                    <br />
                    <Button variant="primary" onClick={sendOrder}>
                        Comprar
                    </Button>
                    <Link to={'/cart'}><Button>
                        Cancelar
                    </Button></Link>
                </Form>

            </div>
        </Container>
    );
}
