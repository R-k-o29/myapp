import { useState } from "react";
import { JobApplication } from "./JobApplication";
 
 
export default function Conditioncomp() {
 
    const [age,setAge]=useState(20);
    function handleChange(event){
        setAge(event.target.value)
    }
 
 
    return (
        <>
            <h3>Welcome to conditional component</h3>
            <input
                type="number"
                value={age}
                placeholder="Enetr your age"
                onChange={handleChange}
            />
 
 
            {age>=18?<JobApplication />:<h2 style={{color:"red"}}>Your age is below 18 . Not Allowed to Apply for this job</h2>}
           
        </>
    )
}