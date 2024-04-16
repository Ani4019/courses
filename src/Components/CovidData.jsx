import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// cases_time_series: (565) […], statewise: (38) […], tested:
function CovidData() {
    const [stateData, setStateData] = useState([])
    const[text, setText]= useState()


    const getCovidData = useCallback(async () => {
        try {
            const { data } = await axios.get("https://data.covid19india.org/data.json")
            setStateData(data.statewise)
        } catch (error) {
            console.error(error)
        }
    }, [])
    useEffect(() => {
        getCovidData()
    },[])

    useEffect(()=> {
        const filteredItems = stateData.filter(item => item.state.toLowerCase().includes(text.toLowerCase())
          );
        setStateData([...filteredItems])
    },[text])

   const textArea=(e)=>{
    const value=e.target.value
    setText(value)
   }
    return (
        <>
        {/* {console.log(state)} */}
            <p>COVID DATA </p>
            {console.log(stateData)}
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
                        <th>State</th>
                        <th>Confirmed Cases</th>
                        <th>Active Cases</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Tests Conducted</th>
                    </tr>
                </thead>
                <tbody>
                    {stateData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.state}</td>
                            <td>{data.confirmed}</td>
                            <td>{data.active}</td>
                            <td>{data.recovered}</td>
                            <td>{data.deaths}</td>
                            <td>{data.tested}</td>
                        </tr>
                    ))}
                </tbody>
            </Table></Col>
                </Row>
            </Container>
        </>
    )
}

export default CovidData;
