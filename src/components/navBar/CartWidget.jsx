
import Badge from 'react-bootstrap/Badge';

export const CartWidget = (props) => {
    return (
        <>
            <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" bg="danger">{props.widGet}</Badge>
        </>
    )
}