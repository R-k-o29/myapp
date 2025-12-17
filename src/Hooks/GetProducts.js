import { useEffect, useState } from "react";

export default function Getproducts() {
    const[products, setProducts]=useState([]);

    // function fetchProducts(){
    //     fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then(
    //         (data)=>{
    //             console.log(data);
    //             setProducts(data);
    //         }
    //     ).catch((err)=>{
    //         console.log("Error fetching products",err);
    //     })
    // }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then(
            (data)=>{
                console.log(data);
                setProducts(data);
            }
        ).catch((err)=>{
            console.log("Error fetching products",err);
        })
    }, []);



    return(
        <>
            <h1>Products: </h1>
            {/* <button onClick={setProducts}>Get Products</button> */}
            <ol>
                {products.map((product)=>(
                    <li key={product.id}>{product.title} - ${product.price}</li>
                ))}
            </ol>
        </>
    );
}
