import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


const Header = ({ title }) => {
    return (
    <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
    </Navbar>

    );
};

export default Header;