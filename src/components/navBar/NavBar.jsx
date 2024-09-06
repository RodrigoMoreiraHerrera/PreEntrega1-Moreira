import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import logo from '../../assets/img/logo-entero.png';
import { CartButton } from './CartButton';


export const NavBar = () => {
    return (
        <Navbar expand="lg" className=" bg-dark" bg="dark" data-bs-theme="dark" sticky="top">
            <Container >
                <Navbar.Brand as={NavLink} to="/" className='navBrand'><img /*class="rounded-circle" /*shadow p-3 mb-5 bg-body-tertiary rounded /*border border-black*/ src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex justify-content-center"
                        //style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/category/tyres">NEUMATICOS</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/baterys">BATERIAS</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/services">SERVICIOS</Nav.Link>
                        <NavDropdown title="Menú" id="navbarScrollingDropdown">
                            <NavDropdown.Item>Vehiculos</NavDropdown.Item>
                            <NavDropdown.Item>Servicios</NavDropdown.Item>
                            <NavDropdown.Item>Neumaticos</NavDropdown.Item>
                            <NavDropdown.Item>Llantas</NavDropdown.Item>
                            <NavDropdown.Item>Baterias</NavDropdown.Item>
                            <NavDropdown.Item>Ofertas</NavDropdown.Item>
                            <NavDropdown.Item>Locales</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item >Trabaja con nosotros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2 "
                            aria-label="Search"
                        />
                        <Button variant="outline-primary" ><i className="bi bi-search "></i></Button>
                        <CartButton />
                        <Button variant="outline-primary"><i className="bi bi-person-gear"></i></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
