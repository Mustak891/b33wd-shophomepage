import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { Nav, Navbar, NavDropdown, Button, Container, Card, Badge } from 'react-bootstrap';
import './App.css';

export default function App() {

  const [add, toadd] = useState(0)
  const [disable, setDisable] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);
  const [disable5, setDisable5] = useState(false);
  const [disable6, setDisable6] = useState(false);
  const [disable7, setDisable7] = useState(false);

  return (
  <div className="App">
  <Navbar collapseOnSelect expand="lg" bg="light" >
  <Container>
  <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  <Nav.Link href="#">Home</Nav.Link>
  <Nav.Link href="#">About</Nav.Link>
  <NavDropdown title="Shop" id="collasible-nav-dropdown">
  <NavDropdown.Item href="#">All Products</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#">Popular items</NavDropdown.Item>
  <NavDropdown.Item href="#">New Arrivals</NavDropdown.Item>
  </NavDropdown>
  </Nav>
  <Nav>
  <button className="topbutton" onClick= {() => { return toadd(0) || setDisable(false) || setDisable1(false) || setDisable2(false) || setDisable3(false) || setDisable4(false) || setDisable5(false) || setDisable6(false) || setDisable7(false)}}><i class="fa-solid fa-cart-shopping"></i> Cart&nbsp;&nbsp;<Badge bg="dark">{add}</Badge></button>
  </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  <div className="mainheading">
  <h1 className="mainname">Shop in style<br/><h4 className="secondname">With this shop hompeage template</h4></h1>
  </div>
  <div className="card_container">
    <div className="card_box">
    <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
    <Card.Title className="cardtitle">Fancy Product</Card.Title>
    <Card.Text>$40.00 - $80.00</Card.Text>
    <Card.Text><span class="hiddenstar">★★★★★</span></Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable} onClick= { ()=> { return toadd(add + 1) || setDisable(true) }} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
    <Card.Title className="cardtitle">Special Item</Card.Title>
    <Card.Text><span class="star">★★★★★</span></Card.Text>
    <Card.Text><strike>$20.00</strike>  $18.00</Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable1} onClick= { ()=> { return toadd(add + 1) || setDisable1(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body >
    <Card.Title className="cardtitle">Sale Item</Card.Title>
    <Card.Text><strike>$50.00</strike>  $25.00</Card.Text>
    <Card.Text><span class="hiddenstar">★★★★★</span></Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable2} onClick= { ()=> { return toadd(add + 1) || setDisable2(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
    <Card.Title className="cardtitle">Popular Item</Card.Title>
    <Card.Text><span class="star">★★★★★</span></Card.Text>
    <Card.Text>$40.00</Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable3} onClick= { ()=> { return toadd(add + 1) || setDisable3(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
  <Card.Title className="cardtitle">Sale Item</Card.Title>
    <Card.Text><strike>$50.00</strike>  $25.00</Card.Text>
    <Card.Text><span class="hiddenstar">★★★★★</span></Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable4} onClick= { ()=> { return toadd(add + 1) || setDisable4(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
    <Card.Title className="cardtitle">Fancy Product</Card.Title>
    <Card.Text>$120.00 - $280.00</Card.Text>
    <Card.Text><span class="hiddenstar">★★★★★</span></Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable5} onClick= { ()=> { return toadd(add + 1) || setDisable5(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
  <Card.Title className="cardtitle">Special Item</Card.Title>
    <Card.Text><span class="star">★★★★★</span></Card.Text>
    <Card.Text><strike>$20.00</strike>  $18.00</Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable6} onClick= { ()=> { return toadd(add + 1) || setDisable6(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
 <div className="card_box">
 <Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://reactjs.org/logo-og.png" /> 
  <Card.Body>
  <Card.Title className="cardtitle">Popular Item</Card.Title>
    <Card.Text><span class="star">★★★★★</span></Card.Text>
    <Card.Text>$40.00</Card.Text>
    <Button className="btn" variant="btn btn-outline-dark" disabled={disable7} onClick= { ()=> { return toadd(add + 1) || setDisable7(true)}} >Add to cart</Button>   
  </Card.Body>
 </Card>
 </div>
  </div>
  <div className="footerheading">
  <h6 className="footername">Copyright © Your Website 2022</h6>
  </div>
  </div>
  );
}


