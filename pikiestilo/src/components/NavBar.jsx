import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

import { productos } from '../data/productos';

const categories = productos.map((item) => item.category);
const uniqueCategories = new Set (categories);

console.log ([...uniqueCategories]);


export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="ligth">
      <Container>
        <Navbar.Brand href="#home">Piki Estilo</Navbar.Brand>
        <Nav className="me-auto">
          {[...uniqueCategories].map((item)=>(
             <Nav.Link key={item} to={item}>
              {item}
            </Nav.Link>))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
};