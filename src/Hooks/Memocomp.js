import { useMemo, useState } from "react"
 
 
export default function Memocomp() {
    const [count, setCount] = useState(0);
 
 
    function expensiveCalculation() {
        console.log("Calculating........");
        let result = 10000 * 4523;
        console.log(result);
        return result;
    }
 
    const memoizedValue = useMemo(
        () => expensiveCalculation(),[]
    )

    // const memoizedValue = expensiveCalculation();
 
 
    return (
        <>
            <h3>Count is : {count} </h3>
 
            <button onClick={
                () => setCount(count => count + 1)
            }>increment</button>

             <p> Result : { memoizedValue}</p>
 
 
        </>
    )
}