import Button from 'react-bootstrap/Button';


export const AddItemButton = ({callBack}) => {

    return (
        <Button variant="primary" onClick={callBack} >Agregar al Carrito</Button>
    )}