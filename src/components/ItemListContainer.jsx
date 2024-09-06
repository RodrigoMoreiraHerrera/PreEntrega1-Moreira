
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Container } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';

import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";

import { ItemList } from "./ItemList"




export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = !id.Id ? collection(db, "items") : query(collection(db, "items"), where("category", "==", id.Id));

        getDocs(itemCollection)
            .then((snapshot) => {
                setItems(snapshot.docs.map(
                    (doc) => ({ id: doc.id, ...doc.data() })
                ))
            }

            ).finally(() => setLoading(false))
    }, [id]);

    if (loading) return <Spinner animation="border" variant="primary" />;


    return (
        <ItemList items={items} />
    )
}

