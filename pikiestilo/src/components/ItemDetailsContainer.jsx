import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { productos } from "../data/productos";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        promise
            .then((response) => {
                const filteres = response.find((item) => item.id === id);
                setItem(filteres);
            })
    }, [id]);

    if (!item) {
        return <> Loading </>;
    }


    return (
    <div>
        <h1>{item.title}</h1>
        <img src={item.pictureUrl} /> 
        <p>{item.description}</p>
    </div>
    );
};