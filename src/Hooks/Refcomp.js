import { useEffect, useRef } from "react";
 
 
 
export default function Refcomp() {
    const inputRef = useRef("");
 
    function handleClick() {
        alert(`input value : ${inputRef.current.value}`)
    }
 
    useEffect(() => {
        console.log(useRef);
    }, [inputRef])
 
    return (
        <>
            <input
                ref={inputRef}
                type="text"
            />
            <button onClick={handleClick}>Check input value</button>
        </>
    )
}