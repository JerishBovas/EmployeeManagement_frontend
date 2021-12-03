import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';

export const NavBar = ({stateChanger, currState}) => {

    function isActive(state){
        if(currState == state){
            return "active";
        }
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container fluid={true}>
                    <Navbar.Brand>Employee Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <li class="nav-item">
                            <a class={"nav-link "+isActive("home")} onClick={() => stateChanger("home")}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class={"nav-link "+isActive("list")} onClick={() => stateChanger("list")}>List</a>
                        </li>
                        <li class="nav-item">
                            <a class={"nav-link "+isActive("add")} onClick={() => stateChanger("add")}>Add</a>
                        </li>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}
