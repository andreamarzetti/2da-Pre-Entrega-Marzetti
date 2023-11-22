import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

import { products } from '../data/products';

const categories = products.map((item) => item.category);
const uniqueCategories = new Set(categories);

console.log([...uniqueCategories]);


export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="ligth">
      <Container>
        <NavLink to="/">
          <Navbar.Brand >Piki Estilo</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
          {[...uniqueCategories].map((item) => (
            <Nav.Link as={NavLink} key={item} to={`/category/${item}`}>
              {item}
            </Nav.Link>))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
};