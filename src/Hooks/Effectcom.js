import { useState } from 'react';

export default function Effectcom() {
    const [categories, setCategories] = useState([]);

    function getData() {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => response.json())    
            .then((data) => {
                console.log(data);
                setCategories(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            }); 
    }

    return (    
        <>
            <h1>Effect Component </h1>
            <button onClick={getData}>Get Data</button>
            <p>Categories:</p>
            <ul>
                {categories.map((category, index) => (  
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </>
    );
}