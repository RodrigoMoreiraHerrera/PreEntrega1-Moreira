import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/img/logo-entero.png';
import { CartButton } from './CartButton';


export const NavBar = () => {
    return (
        <Navbar expand="lg" className=" bg-dark" bg="dark" data-bs-theme="dark" sticky="top">
            <Container >
                <Navbar.Brand as={NavLink} to="/" className='navBrand'><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex justify-content-center"
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/category/tyres">NEUMATICOS</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/baterys">BATERIAS</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/services">SERVICIOS</Nav.Link>
                    </Nav>
                    <CartButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};




