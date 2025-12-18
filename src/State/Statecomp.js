import { useEffect, useState } from "react"
 
 
 
export function Statecomp() {
 
    //2
    const [inputRef, setInputRef] = useState("");//S
    const [count, setCount] = useState(0);  //store and manupulate data
    //setCount have two jobs
    //1. to update data inside COunt
    //2. to re-render entire component again
    useEffect(()=>{
        console.log(inputRef);
    },[inputRef])
 
    function handleinputChange(event){
        setInputRef(event.target.value);//S
    }
    return (
        <>
            <input
                value={inputRef}
                type="text"
                onChange={handleinputChange}
 
            />
 
 
            <h2>Count : {count} </h2>
 
            <button
                onClick={() => { setCount(count + 1) }}
            >increment</button>
        </>
    )
}