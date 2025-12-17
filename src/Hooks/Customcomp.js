import useCounter from "./useCounter";

export default function Customcomp() {

    const{count,increment,decrement}=useCounter(0);

    return (
        <>
            <h3>Custom Hook Component</h3>
            <h3>Count {count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}