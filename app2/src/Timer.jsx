import React ,{useEffect, useState} from "react";


const Timer = () => {
    const [time, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() =>
            {
                setSeconds(time => time + 1);
            }, 1000
            )
            return () =>
                clearInterval(timer);
           // clear the timer when component unmounts
        

    }, [time]);    
        

    return (
        <div>
            <h1>Timer</h1>
            <p>Current timer is {time}</p>
        </div>
    );
    };
    export default Timer;