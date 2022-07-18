import React, { useState } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount(count + 1);
//         // console.log(setCount * 10)

//     }

//     return <button onClick = { increment } > I have been clicked { count }
//     times < /button>; 

// }

// function Counter() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         console.log(`before setState: ${count}`);

//         setCount(count + 1);

//         console.log(`after setState: ${count}`);
//     }

//     return <div onClick = { increment } > { count } < /div>;
// }

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        // call setCount twice, to update the counter by two every time we click
        setCount(count + 2);
        // setCount(count + 1);
    }

    return <div >
        <
        button onClick = { increment } > { count }

    <
    /button> < /
    div > ;
}

export default Counter;