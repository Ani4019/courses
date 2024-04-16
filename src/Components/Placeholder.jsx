import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Placeholder() {
    const [users, setUsers] = useState([])
    const[text, setText]= useState()
    

    const typicode = useCallback(async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        } catch (error) {
            console.error(error)
        }

    }, [])
    useEffect(() => {
        typicode()
    },[])

    useEffect(()=> {
        const filteredItems = users.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.address.city.toLowerCase().includes(text.toLowerCase()) ||
            item.email.toLowerCase().includes(text.toLowerCase())
          );
        setUsers([...filteredItems])
    },[text])

   const textArea=(e)=>{
    const value=e.target.value
    setText(value)
   }
    return (
        <>
            <p>Placeholder Typicode </p>
            {console.log(users)}
            <Container fluid>
                <Row>
                    <Col md={12} style={{paddingBottom:'10px'}}>
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
                            <Form.Control
                            value={text} onChange={textArea}
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>city</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Placeholder
