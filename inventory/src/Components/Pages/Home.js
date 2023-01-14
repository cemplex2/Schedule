import React, {useState} from "react";
import SlideIn from "../SlideIn";
import Box from "../Box";
import "../styles/Home.css"
import CreateArea from "../CreateArea";


function Home() {
    const [startAnimation, setStartAnimation] = useState(false);


    return (
        <>

            <button className="addTodo" onClick={() => setStartAnimation(!startAnimation)}> Toggle Animation</button>
            <div className="App">
                <SlideIn startAnimation={startAnimation}>
                    <CreateArea/>
                </SlideIn>
            </div>
        </>
    )
}

export default Home;
