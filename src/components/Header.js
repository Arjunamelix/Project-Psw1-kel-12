import React from 'react';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const activeStyle = { backgroundColor: "#343a40", color: "white"};
    const defaultStyle = { color: "#000" };

    const handleLogout = () => {
        navigate("/login")
    };

    return (
        <Navbar expand="lg" className="d-flex justify-content-center" style={{ width: "100%" }}>
            <Container className="d-flex justify-content-center">
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="w-100">
                    <Nav className="d-flex justify-content-center w-100">
                        <Nav.Link onClick={() => navigate('/Home')} style={location.pathname === "/Home" ? activeStyle : defaultStyle}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate('/About')} style={location.pathname === "/About" ? activeStyle : defaultStyle}>
                            Tentang
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate('/Contact')} style={location.pathname === "/Contact" ? activeStyle : defaultStyle}>
                            Curhat
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="danger" onClick={handleLogout} className="ms-auto" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>
                    Log Out
                </Button>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;