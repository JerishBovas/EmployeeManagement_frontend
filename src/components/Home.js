import React from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'

export default function Home({stateChanger}) {
    return (
        <Container>
            <h1 class="text-center">Welcome to Employee Management System</h1>
            <br/>
            <h5 class="text-center">Here to manage your employees like add, delete and update their records.</h5>
            <br/>
            <Row>
                <Col>
                    <Card style={{width: 300, margin: 'auto', marginTop: 20, marginBottom: 20}}>
                        <Card.Body>
                            <Card.Title>List Employees</Card.Title>
                            <Card.Text>
                            Click here to view the list of Employees from the Database.
                            </Card.Text>
                            <Card.Link onClick={() => stateChanger("list")} class="btn btn-primary"><i class="fas fa-list"></i>&nbsp;&nbsp;List</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: 300, margin: 'auto', marginTop: 20, marginBottom: 20}}>
                        <Card.Body>
                            <Card.Title>Add Employee</Card.Title>
                            <Card.Text>
                            Click here to create a new Employee account in the Database.
                            </Card.Text>
                            <Card.Link onClick={() => stateChanger("add")} class="btn btn-primary"><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Add</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: 300, margin: 'auto', marginTop: 20, marginBottom: 20}}>
                        <Card.Body>
                            <Card.Title>View Employee</Card.Title>
                            <Card.Text>
                            View Details of a specific Employee from the Database.
                            </Card.Text>
                            <Card.Link onClick={() => stateChanger("view")} class="btn btn-primary"><i class="fas fa-user"></i>&nbsp;&nbsp;View</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
