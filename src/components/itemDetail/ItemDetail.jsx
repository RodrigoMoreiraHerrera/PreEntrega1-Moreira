
import { Card } from 'react-bootstrap';

import { ItemQuantitySelector } from './ItemQuantitySelector.jsx'


export const ItemDetail = ({ item }) => {

    return (
        <Card className="text-center">
            <Card.Header><Card.Title>{item.title}</Card.Title></Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Text>
                    {item.description}
                </Card.Text>
                <b>${item.price}</b>
                <br />
                <b>Stock: {item.stock}</b>
                <br />
            </Card.Body>
            <Card.Footer className="text-muted">
                <ItemQuantitySelector stock={item.stock} item={item} />
            </Card.Footer>
        </Card>
    )
}

