import React, {useEffect, useRef, useState} from "react";

function UseEffectTest() {

    const [count, setCount] = useState(0)
    const data = useRef(true)


    useEffect(() => {
        data.current = !data.current
    })

    return (
        <>
            <button onClick={() => setCount(prevState => prevState + 1)}> +</button>
            <pre> {count}</pre>
            <pre> {data.current.toString()}</pre>
        </>
    );
}

export default UseEffectTest;
