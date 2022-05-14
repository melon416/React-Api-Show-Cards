import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap';

function App() {
  const [query, setQuery] = useState('');
  const [apiData, setApiData] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleShowData = () => {
    if (query === '') return
    axios
      .get(`https://www.omdbapi.com/?s=$${query}&apikey=c296f12b`)
      .then((res) => {
        console.log(res.data.Search);
        setApiData(res.data.Search);
      })
      .catch((err) => {
        console.error("Error: ", err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={query} onChange={handleInputChange}></input>
        <button onClick={handleShowData}>Show Data</button>
        <Row>
          {apiData.map((item) => (
              
                <Col sm={4} md={4} lg={2} xl={2}>
                  <Card>
                    <div className='img-container'>
                      <CardImg className="card-image" src={item.Poster}></CardImg>
                    </div>
                    <h3 style={{color: "black"}}>{item.Title}</h3>
                    <h3 style={{color: "black"}}>{item.Year}</h3>
                  </Card>
                </Col>
              
          ))}
        </Row>
      </header>
    </div>
  );
}

export default App;
