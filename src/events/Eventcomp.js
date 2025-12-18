import {useState} from "react";

export default function Eventcomp() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleKeydown(event) {
        console.log("Key pressed:", event.key);
    }

    function handleFocus() {
        console.log("Input field focused");
    }

    function handleBlur() {
        console.log("Input field blurred");
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Form submitted with name: ${name}`);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Event Handling in React</h2>
                <input 
                type="text"
                placeholder="Enter your name"
                style={{marginLeft: "3px",padding:"5px",borderRadius:"2px"}}
                onChange={handleNameChange}
                onKeyDown={handleKeydown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}