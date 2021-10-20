import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => {
    return(
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
            <Container>
                <Navbar.Brand>jerel.dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.github.com/jlayog">Github</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    ) 
}

export default MainNavbar;