import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieAddData from './MovieAddData';
import Button from 'react-bootstrap/Button';
import MovieEditData from './MovieEditData';
import MovieDeleteData from './MovieDeleteData';



function MovieData() {
  const[moviesData, setMoviesData]=useState([])
  const[text, setText]=useState([])
  const[copyMovieData, setCopyMovieData]=useState([])
  const [show, setShow] = useState(false);
  const[ editShow, setEditShow] = useState(false);
  const[editData, setEditData]=useState([])
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteData, setDeleteData] = useState([]);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditModalClose = () => setEditShow(false);
    const handleEditModalShow = () => setEditShow(true);


  const getFilmData= useCallback (async ()=>{
    try{
      const response= await axios.get("https://dummyapi.online/api/movies")
      setMoviesData(response.data)
      setCopyMovieData(response.data)
       }catch(error){
         console.log(error)
       }
  },[]) 

  const postData = useCallback(async (loading) => {
    try {
        const response = await axios.post("https://dummyapi.online/api/movies", loading)
        moviesData.unshift(response.data)
        console.log(moviesData)
        setMoviesData(moviesData)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}, [])

const movieDataDelete = useCallback(async (data) => {
  try {
      
      const response  = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
      const x = moviesData.filter((a) => a.id !== data.id );
      setMoviesData([...x])
      console.log(response.data)
      
  } catch (error) {
      console.error(error)
  
  }
})
  
 
  useEffect(()=>{
    getFilmData()
  },[])

  const textArea=(e)=>{
    const value=e.target.value
    setText(value)
  }

  useEffect(()=>{
    if(text === ""){
    setMoviesData(copyMovieData)
    return
  }
  const filteredItems=moviesData.filter(item=>
    item.id.toString().toLowerCase().includes(text.toLowerCase()) ||
    item.movie.toLowerCase().includes(text.toLowerCase()) 
    )
    setMoviesData([...filteredItems])
    },[text])

    const handleModalClose=()=>{
      handleClose()
      getFilmData()
    }
    const handleModalEditDataClose=(data)=>{
      setEditData(data)    
      handleEditModalShow()    
    }

    const editHandleData=()=>{
      handleEditModalClose()
      getFilmData()
    }

    const handleModalEditDataOpen=(data)=>{
      setDeleteData(data)
      setDeleteShow(true)
    }

   const DeleteHandleData=()=>{
    setDeleteShow(false)
   }
  return (
    <>
      <p>Movie Data</p>
      {console.log(moviesData)}
      <Button variant="primary" onClick={handleShow}>
          Add Movies
        </Button>
        <MovieAddData show={show} handleModalDataClose={handleModalClose} addPost={postData}/>
        <MovieEditData show={editShow} handleModalEditDataClose={editHandleData} dataEdit={editData}/>
        <MovieDeleteData show={deleteShow} handleModalDeleteDataClose={DeleteHandleData} dataDelete={deleteData} movieDelete={movieDataDelete}/>
      <Container fluid>
        <Row>
        <Col md={12} style={{paddingBottom:'10px'}}>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control value={text} onChange={textArea}
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
                <th>Movie</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Image-URL</th>
              </tr>
            </thead>
            <tbody>
              {moviesData.map((data, index) => (
                <tr key={index} onClick={()=> handleModalEditDataOpen(data)} >
                  <td>{data.id}</td>
                  <td>{data.movie}</td>
                  <td>{data.rating}</td>
                  <td>{data.image}</td>
                  <td>{data.imdb_url}</td>
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

export default MovieData
