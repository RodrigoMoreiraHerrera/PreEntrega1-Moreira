import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

export const CartItemDetail = ({item}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Text>
                    Cantidad seleccionada: {item.quantity}
                </Card.Text>
                <Card.Text>
                    Precio total: ${item.quantity * item.price}
                </Card.Text>
                <Button onClick={() => removeItem(item.id)}><i className="bi bi-trash3"></i></Button>
            </Card.Body>
        </Card>
    )
}
