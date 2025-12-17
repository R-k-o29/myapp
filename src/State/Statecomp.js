import {useState } from "react";

export function Statecomp() {
    const  [count,setCount] =useState(0); // useState is a Hook that allows you to have state variables in functional components.

    //setcount has two jobs:
    // 1. to update data inside count
    // 2. to re render the component


    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
    
}