import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LaptopAddData from './LaptopAddData';
import LaptopEditData from './LaptopEditData';
import LaptopDeleteData from './LaptopDeleteData';


function LaptopData() {
    const[lapData, setLapData]=useState([])
    const[text, setText]=useState([])
    const[copyLapData, setCopyLapData]=useState([])
    const [show, setShow] = useState(false);
    const[ editShow, setEditShow] = useState(false);
    const[editData, setEditData]=useState([])
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteData, setDeleteData] = useState([]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditModalClose = () => setEditShow(false);
    const handleEditModalShow = () => setEditShow(true);

    const getLaptopData= useCallback (async ()=>{
        try{
            const response= await axios.get("https://fakestoreapi.com/products")
            setLapData(response.data)
            setCopyLapData(response.data)
        }catch (error){
            console.log(error)
        }

    },[])

    const postData = useCallback(async (formValue) => {
        try {
            const response = await axios.post("https://fakestoreapi.com/products", formValue)
            lapData.unshift(response.data)
            console.log(lapData)
            setLapData(lapData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }, [])

const lapTopDataEdit = useCallback(async (formValue) => {
    try {
        const response = await axios.patch(`https://fakestoreapi.com/products/${formValue.id}`, formValue);
        const updatedData = lapData.map(item => item.id === formValue.id ? response.data : item);
        setLapData(updatedData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}, [lapData]);


    const laptopDataDelete = useCallback(async (formValue) => {
        try {
            
            const response  = await axios.delete(`https://fakestoreapi.com/products/${formValue.id}`)
            const x = lapData.filter((a) => a.id !== formValue.id );
            setLapData([...x])
            console.log(response.data)
            
        } catch (error) {
            console.error(error)
        
        }
      })

    useEffect(()=>{
        getLaptopData()
    },[])

    const textArea=(e)=>{
        const value=e.target.value
        setText(value)
    }

    useEffect(()=>{
if(text === ""){
    setLapData(copyLapData)
    return
}
const filteredItems= lapData.filter(item=>
    item.id.toString().toLowerCase().includes(text.toLowerCase()) ||
    item.title.toLowerCase().includes(text.toLowerCase()) ||
    item.price.toString().toLowerCase().includes(text.toLowerCase()) ||
    item.category.toLowerCase().includes(text.toLowerCase()) 
)
setLapData([...filteredItems])
    },[text])

        const handleModalClose=()=>{
        handleClose()
        getLaptopData()
    }

    const handleModalEditDataClose=(data)=>{
        setEditData(data)    
        handleEditModalShow()    
      }
  
      const editHandleData=()=>{
        handleEditModalClose()
        getLaptopData()
      }
  
      const handleModalDeleteDataOpen=(data)=>{
        setDeleteData(data)
        setDeleteShow(true)
      }
      
    const DeleteHandleData=()=>{
        setDeleteShow(false)
       }
  return (
    <>
      <p>Material Data </p>
      {console.log(lapData)}
      <Button variant="primary" onClick={handleShow}>
          Add Materials
        </Button>
        <LaptopAddData show={show} handleModalDataClose={handleModalClose} addPost={postData}/>
        <LaptopEditData show={editShow} handleModalEditDataClose={editHandleData} dataEdit={editData} laptopEdit={lapTopDataEdit}/>
        <LaptopDeleteData show={deleteShow} handleModalDeleteDataClose={DeleteHandleData} dataDelete={deleteData} laptopDelete={laptopDataDelete}/>      <Container fluid>
        <Row>
        <Col md={12} style={{paddingBottom:'10px'}}>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control  value={text} onChange={textArea}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
          </Col>
          <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {lapData.map((data, index) => (
                <tr key={index} onClick={()=>handleModalDeleteDataOpen(data)}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.description}</td>
                  <td>{data.category}</td>
                  <td>{data.image}</td>
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


export default LaptopData
