import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

export const List = ({stateChanger, idChanger}) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(`http://20.48.250.4:9090/api/v1/employees/`)
        .then(res => {
            setEmployees(res.data);
        })
    }, [])

    const list = employees.map(e => 
        <tr>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.emailId}</td>
            {<td style={{width: 500}}>
                <button style={{width: 100, marginLeft: 50}} type="button" onClick={() => {
                    idChanger(e.id);
                    stateChanger("view")
                }} class="btn btn-outline-success">View</button>
                <button style={{width: 100, marginLeft: 50}} type="button" onClick={() => {
                    idChanger(e.id);
                    stateChanger("update")
                }} class="btn btn-outline-warning">Update</button>
                <button style={{width: 100, marginLeft: 50}} type="button" onClick={() => {
                    idChanger(e.id);
                    stateChanger("delete")
                }} class="btn btn-outline-danger">Delete</button>
            </td>}
        </tr>
    )

    return (
        <div class="container">
            <h1 class="text-center">Employees List</h1>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        </div>
    )
}
