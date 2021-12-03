import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function Update({stateChanger, id, setMessage}) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get(`http://20.48.250.4:9090/api/v1/employees/${id}`)
        .then(res => {
            setFName(res.data[0].firstName);
            setLName(res.data[0].lastName);
            setEmail(res.data[0].emailId);
        })
    }, [])

    const handleSubmit = (e) => {
        axios.put(`http://20.48.250.4:9090/api/v1/employees/${id}`, {
            firstName: fName,
            lastName: lName,
            emailId: email,
          })
          .then(response => {
              setMessage(response.data.message)
          })
          .catch(function (error) {
            console.log(error);
          });
        e.preventDefault();
        stateChanger("list")
    }

    return (
        <div class="container">
            <h1 class="text-center">Update Employee</h1>
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
                    Update Employee
                </Button>
            </Form>
        </div>
    )
}
