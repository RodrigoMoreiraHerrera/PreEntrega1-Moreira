import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";

import { Item } from "./Item"


import { Container } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';


export const ItemList = ({ items }) => {

    return (
        <Container className="mt-4 row" id="container">
            {items.map((i) => (
                <Item item={i} key={i.id} />
            ),
            )}
        </Container>

    )
}


