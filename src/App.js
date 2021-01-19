import React, { useState } from 'react'
import {Row,Col} from 'reactstrap'
import NavBar from '../src/NavBar/NavBar';
import './App.css'
import Banner from './Banner/Banner';
const App = () => {
  const [toggle,setToggle]=useState(false);
  console.log(toggle)
  return (
    <div className={`container-fluid App ${toggle && "toggle_Change"}`}>
      <div  className='row' style={{ position: "fixed",marginTop:'5px' }}>
        <NavBar setToggle={setToggle} toggle={toggle} />
      </div>
      <Banner toggle={toggle} />

      <Row style={{ marginTop: "20px" }}>
        <Col xs="4"></Col>
        <Col xs="8"></Col>
      </Row>
    </div>
  );
}

export default App
