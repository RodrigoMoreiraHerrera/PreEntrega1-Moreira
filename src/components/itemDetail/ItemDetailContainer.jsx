import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getFirestore, getDoc, doc } from "firebase/firestore";

import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id.Id)

        getDoc(itemRef)
            .then((snapshot) => {
                setItem({ ...snapshot.data(), id: snapshot.id });
            })
            .finally(() => setLoading(false))
    }, [id])


    if (loading) return <Spinner animation="border" variant="primary" />;


    return (
        <Container className="item-container">
            <ItemDetail item={item} />
        </Container>
    )
}
