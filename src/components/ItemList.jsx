import { Item } from "./Item"

import { Container } from "react-bootstrap"



export const ItemList = ({ items }) => {

    return (
        <Container fluid className="mt-4 row text-center justify-content-center " id="container">
            {items.map((i) => (
                <Item item={i} key={i.id} />
            ),
            )}
        </Container>

    )
}


