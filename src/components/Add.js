import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function Add({stateChanger, idChanger}) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [res, setRes] = useState({})

    const handleSubmit = (e) => {
        axios.post('http://20.48.250.4:9090/api/v1/employees/', {
            firstName: fName,
            lastName: lName,
            emailId: email,
          })
          .then(response => {
              setRes(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        e.preventDefault();
        stateChanger("home")
    }

    return (
        <div class="container">
            <h1 class="text-center">Add Employee</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={fName} onChange={e => setFName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lName} onChange={e => setLName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Employee
                </Button>
            </Form>
        </div>
    )
}
