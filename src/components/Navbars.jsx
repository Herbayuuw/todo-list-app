import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navbars = ({ list }) => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="fs-3 fw-bold text-white" href="#home">
                    TODO LIST APP
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Navbars;
