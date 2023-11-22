import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList"; // Ajuste en la importación
import { products } from "../data/products";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise
      .then((response) => {
        if (id) {
          const filtered = response.filter((item) => item.category === id); // Corrección en la variable

          setItems(filtered);
        } else {
          setItems(response);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>Lista </h1>
      <ItemList items={items} />
    </Container>
  );
};
