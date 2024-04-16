import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Countries() {
    const [countryData, setCountryData] = useState([])
    const [copyCountryData, setCopyCountryData]= useState([])
    const[text, setText]= useState()
    const [flagUrl, setFlagUrl] = useState();


    const getCountriesData = useCallback(async () => {
        try {
            const response  = await axios.get("https://restcountries.com/v2/all")
            setCountryData(response.data)
            setCopyCountryData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const postCountriesData = useCallback(async () => {
        try {
            const payLoad= {userId:	5,
                title:	"Countries",
                body:	"All countries data with region, subregion & capital"}
            const response  = await axios.post("https://jsonplaceholder.typicode.com/posts",payLoad)
            setCountryData(response.data)
            setCopyCountryData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const patchCountriesData = useCallback(async () => {
        try {
            const payLoad= {
                title:	"Countries Data",
            body: "All countires data"}
            const response  = await axios.patch("https://jsonplaceholder.typicode.com/posts/1",payLoad)
            setCountryData(response.data)
            setCopyCountryData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const deleteCountriesData = useCallback(async () => {
        try {
            const response  = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            setCountryData(response.data)
            setCopyCountryData(response.data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getCountriesData()
    },[])

    useEffect(()=> {
        if (text === ""){
           setCountryData(copyCountryData) 
           return
        }
        const filteredItems = countryData.filter(item => 
            item.name?.toLowerCase().includes(text.toLowerCase()) ||
            item.capital?.toLowerCase().includes(text.toLowerCase()) ||
            item.region?.toLowerCase().includes(text.toLowerCase())
        );
        setCountryData([...filteredItems])
    },[text])

   const textArea=(e)=>{
    const value=e.target.value
    setText(value)
   }

   const handleFlagClick = (flagUrl) => {
    setFlagUrl(flagUrl);
};
    return (
        <>
            <p>COUNTRIES DATA </p>
            {console.log(countryData)}
            <button onClick={postCountriesData}>Click Me</button>           
            <button onClick={patchCountriesData}>Submit</button>
            <button onClick={deleteCountriesData}>Give Me</button>
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
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Subregion</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Code</th>
                        <th>Area</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {countryData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.capital}</td>
                            <td>{data.subregion}</td>
                            <td>{data.region}</td>
                            <td>{data.population}</td>
                            <td>{data.numericCode}</td>
                            <td>{data.area}</td>
                            <td>
                            <a href='#' onClick={()=>handleFlagClick (data.flag)}>
                            View Flag
                            </a>
                            {data.flag && flagUrl === data.flag && <img src={data.flag} alt="Flag" />}
                            </td>
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


export default Countries
