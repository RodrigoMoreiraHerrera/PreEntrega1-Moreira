import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
import logo from '../assets/img/logo.png';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="black" data-bs-theme="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#"><img /*class="rounded-circle" /*shadow p-3 mb-5 bg-body-tertiary rounded /*border border-black*/ src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Ofertas</Nav.Link>
                        <Nav.Link href="#action2">Servicios</Nav.Link>
                        <Nav.Link href="#">Neumáticos</Nav.Link>
                        <Nav.Link href="#">Baterías</Nav.Link>
                        <NavDropdown title="Menú" id="navbarScrollingDropdown">
                            <NavDropdown.Item>Vehiculos</NavDropdown.Item>
                            <NavDropdown.Item>Servicios</NavDropdown.Item>
                            <NavDropdown.Item>Neumaticos</NavDropdown.Item>
                            <NavDropdown.Item>Llantas</NavDropdown.Item>
                            <NavDropdown.Item>Baterias</NavDropdown.Item>
                            <NavDropdown.Item>Ofertas</NavDropdown.Item>
                            <NavDropdown.Item>Locales</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Trabaja con nosotros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2 "
                            aria-label="Search"
                        />
                        <Button variant="outline-warning" ><i className="bi bi-search "></i></Button>
                        <CartWidget widGet="4" />
                        <Button variant="outline-warning"><i className="bi bi-person-gear"></i></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
