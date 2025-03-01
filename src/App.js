import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bank from './bank.jpg'; // Importing the logo
import { HashRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import Cashback from './Cashback';
import Register from './register';
import Alldata from './allData';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from './Slide1.jpg';
import {useState} from 'react';


function App() {
let [isModel, setIsModel]=useState(true);

  return (
    <HashRouter>
     
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bank} // Use the imported image here
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "30px", height: "30px" }}  // Optional: adjust size
            />
            {" "}MoneyMinds Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={()=>setIsModel(true)} >Home </Nav.Link>
              <Nav.Link href="#register" onClick={()=>setIsModel(false)}>Register </Nav.Link>
              <Nav.Link href="#deposit" onClick={()=>setIsModel(false)}>Deposit</Nav.Link>
              <Nav.Link href="#cashback" onClick={()=>setIsModel(false)}>Cashback</Nav.Link>
              <Nav.Link href="#alldata" onClick={()=>setIsModel(false)}>All data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isModel && (
  <div className="home-container">
    <h1 className="main-heading">Welcome to MoneyMinds Bank</h1>
    <h2 className="sub-heading">Your Trusted Partner for a Secure Future</h2>
  </div>
)}



 
   


   
  
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/alldata" element={<Alldata />} />
      </Routes>
      

    </ HashRouter>
  );
}

export default App;
