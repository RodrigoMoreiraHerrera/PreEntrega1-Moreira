import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import data from "../data/products.json"

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(() => {
        setLoading(true)
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

            .then((response) => {
                if (!id.Id) { setItems(response) } else {
                    const filteredItems = response.filter((i) => i.category === id.Id)
                    setItems(filteredItems)
                }
            })
            .catch((error) => { console.error(error) })
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <Spinner animation="border" variant="primary" />;

    return (
        <Container className="mt-4 row" id="container">
            {items.map((i) => (
                <Card key={i.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={i.imgUrl} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>
                            {i.description}
                        </Card.Text>
                        <Link to={`/item/${i.id}`}><Button variant="primary">Mas</Button></Link>
                    </Card.Body>
                </Card>
            )

            )}
        </Container>
    )
}
