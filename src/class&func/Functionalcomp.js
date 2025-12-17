import React from 'react';

export function Functionalcomp() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
        console.log("Component Did Update")
    }, [count]);

    
  return (
    <div>
      {/* <h1>This is a Functional Component</h1> */}
      <p>The count is : {count}</p>
      <button
        onClick={() => {  
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      
    </div>
  );
}