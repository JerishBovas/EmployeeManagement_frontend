import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';

export default function View({stateChanger, id}) {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        if(isNaN(id) || id < 1){
            stateChanger("home")
            window.alert("Please go to List Employees and select an Employee to view")
        }
        axios.get(`http://20.48.250.4:9090/api/v1/employees/${id}`)
        .then(res => {
            setEmployee(res.data[0]);
        })
    }, [])

    return (
        <div class={'container'}>
            <h1 class="text-center">Employee Details</h1>
            <br/>
            <Card>
                <Card.Header as="h5">Employee Details</Card.Header>
                <Card.Body>
                    <Card.Title>First Name: {employee.firstName}</Card.Title>
                    <Card.Title>Last Name: {employee.lastName}</Card.Title>
                    <Card.Title>Email Address: {employee.emailId}</Card.Title>
                    <Button onClick={() => stateChanger("update")} class="btn btn-primary"><i class="fas fa-user-edit"></i>&nbsp;&nbsp;Update</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
