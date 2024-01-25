import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import Logo from '../Logo/Logo';

function NavBar() {
    return (
    <>
        
        <Navbar bg="dark" data-bs-theme="dark"   >
        <Container>
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Nav className="me-auto" id='nav'>
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            </Nav>
            <Nav.Link href="#cartWidget"> <CartWidget /> </Nav.Link>
        </Container>
        </Navbar>
        
    </>
    );
}

export default NavBar; 