import React,{useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
   
   

    return (
        <div>
            <p>Count : {count}</p>
            <h4>Number is {count % 2 === 0 ? "Even":"Odd"}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
    };

export default Counter;