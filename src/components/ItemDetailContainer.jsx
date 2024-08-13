import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import data from "../data/products.json"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => { setTimeout(() => resolve(data), 2000) })
            .then((response) => {
                if (!id.Id) { setItem(response) } else {
                    const findedItem = response.find((i) => i.id === id.Id)
                    setItem(findedItem)
                }
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));

    }, [id])

    if (loading) return <Spinner animation="border" variant="primary" />;

    return (
        <Container>
            <h1>{item.title}</h1>
            <img src={item.imgUrl} alt="" />
            <h3>{item.description}</h3>
            <b>${item.price}</b>
            <Button variant="primary">Agregar al carrito</Button>

        </Container>
    )
}


