import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">App Filmes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/cadastrar">Cadastrar</Nav.Link>
                            <Nav.Link as={Link} to="/listar">Listar</Nav.Link>
                            <Nav.Link as={Link} to="/atualizar">Atualizar</Nav.Link>
                            <Nav.Link as={Link} to="/deletar">Deletar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
