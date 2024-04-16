import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PracticeUserData from './PracticeUserData';
import PracticeUpdateUserData from './PracticeUpdateUserData';
import PracticeDelete from './PracticeDelete';

function PracticeUser() {
    const[userData, setUserData]=useState([])
    const[copyUserData, setCopyUserData]=useState([])
    const [text, setText]=useState([])
    const [show, setShow] = useState(false);
    const[ editShow, setEditShow] = useState(false);
    const[editData, setEditData]=useState([])
    const [deleteShow, setDeleteShow] = useState(false);
const [deleteData, setDeleteData] = useState([]);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModalClose = () => setEditShow(false);
    const handleModalShow = () => setEditShow(true);

const getUsersData=useCallback(async()=>{
    try{
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setUserData(response.data)
        setCopyUserData(response.data)
    }catch(error){
        console.log(error)
    }
},[])

const postUserData = async (formValue) => {
    try {

        const response  = await axios.post("https://jsonplaceholder.typicode.com/posts",formValue)
        userData.unshift(response.data)
        console.log(userData)
        setUserData(userData)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

const userDataDelete = useCallback(async (data) => {
    try {
        
        const response  = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
        // console.log("Post deleted successfully!");
        const x = userData.filter((a) => a.id !== data.id );
        setUserData([...x])
        // userData.pop(response.data)
        console.log(response.data)
        
    } catch (error) {
        console.error(error)
    
    }
  })
useEffect(()=>{
    getUsersData()
},[])

useEffect(()=>{
if(text === ""){
setUserData(copyUserData)
return
}
const filteredItems = userData.filter(item => 
    item.id.toString().toLowerCase().includes(text.toLowerCase()) ||
    item.title.toLowerCase().includes(text.toLowerCase()) 
);
setUserData([...filteredItems])
},[text])

const textArea=(e) =>{
    const value=e.target.value
    setText(value)
}

const handleUserDataModal=()=>{
    handleClose()
    getUsersData()
}

const handleUpdateModal=(data)=>{
    setEditData(data)
    handleModalShow()
   }

const handleEditUserDataModal=()=>{
    handleModalClose()
    getUsersData()
}

const handleDeleteModalOpen = (data) => {
    setDeleteData(data);
    setDeleteShow(true);
};

const handleDeleteModalClose = () => {
    setDeleteShow(false);
};



  return (
    <>
                <p> Practice User Data </p>
                   { console.log(userData)}
                   <Button variant="primary" onClick={handleShow}>
                     Add Post
                    </Button>
                    <PracticeUserData show={show} handleModalClose={handleUserDataModal} addUser={postUserData}/>
                    <PracticeUpdateUserData show={editShow} handleUpdateModal={handleEditUserDataModal} data={editData} />
                    <PracticeDelete  show={deleteShow}  handleDeleteModalClose={handleDeleteModalClose}  data={deleteData} UserDelete={userDataDelete}/>

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
                        <tr key={index} onClick={()=> handleDeleteModalOpen(data)}>
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



export default PracticeUser
