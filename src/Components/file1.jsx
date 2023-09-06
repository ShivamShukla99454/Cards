import React, { useState } from 'react'
const File1 = () => {
    const [inputvalue, setInputValue] = useState('');
    const handleinput = (event) => {
        console.log("event", event);
        console.log("value", event.target.value);
        setInputValue(event.target.value);
    }
    return (
        <>
            <h1>Our First Project </h1>
            <input
                placeholder='search by titlename'
                onChange={(e) => handleinput(e)}
            /> 
            <h1>{inputvalue}</h1>
        </>
    )
}

export default File1

