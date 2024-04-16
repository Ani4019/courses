import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserData from './UserData';
import Button from 'react-bootstrap/Button';
import Updateuserdata from './Updateuserdata';

function Users() {
    const [userData, setUserData] = useState([])
    const [copyUserData, setCopyUserData]= useState([])
    const[text, setText]= useState()
    const [show, setShow] = useState(false);
    const[ editShow, setEditShow] = useState(false);
    const[editData, setEditData]=useState([])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModalClose = () => setEditShow(false);
    const handleModalShow = () => setEditShow(true);

    const getUsersData = useCallback(async () => {
        try {
            const response  = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setUserData(response.data)
            setCopyUserData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleUserDataModal=()=>{
        handleClose()
        getUsersData()
    }

    const handleEditUserDataModal=()=>{
        handleModalClose()
        getUsersData()
    }
    

    
    const deleteUserData = useCallback(async () => {
        try {
            const response  = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            setUserData(response.data)
            setCopyUserData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getUsersData()
    },[])

    useEffect(()=> {
        if (text === ""){
           setUserData(copyUserData) 
           return
        }
        const filteredItems = userData.filter(item => 
            item.id.toString().toLowerCase().includes(text.toLowerCase()) ||
            item.title.toLowerCase().includes(text.toLowerCase()) 
        );
        setUserData([...filteredItems])
    },[text])

   const textArea=(e)=>{
    const value=e.target.value
    setText(value)
   }

   const handleUpdateModal=(data)=>{
    setEditData(data)
    handleModalShow()
   }

   
    return (
        <>
            <p>USERS DATA </p>
            {console.log(userData)}
            {/* <button onClick={postUserData}>Click Me</button>           
            <button onClick={patchUserData}>Submit</button>
            <button onClick={deleteUserData}>Give Me</button> */}
            <Button variant="primary" onClick={handleShow}>
            Add User     
            </Button>
            <UserData show={show} handleModalClose={handleUserDataModal}/>
            <Updateuserdata show={editShow} handleUpdateModal={handleEditUserDataModal} data={editData} />
            <Container fluid>
                <Row>
                    <Col md={12} style={{paddingBottom:'10px'}}>
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg">Find</InputGroup.Text>
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
                        <th>User Id</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((data, index) => (
                        <tr key={index} onClick={()=>handleUpdateModal(data)}>
                            <td>{data.userId}</td>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
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


export default Users
