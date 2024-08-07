import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const CartWidget = (props) => {
    return (<>
        <Button variant="outline-warning" className='position-relative'><i className="bi bi-cart"></i><Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" bg="danger">{props.widGet}</Badge></Button>
    </>)

}