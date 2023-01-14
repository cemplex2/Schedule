import React from "react";
import "./Pages/styles/PrioritySelector.css"


function PrioritySelector() {
    return (
        <>
            <div className="radio">
                <input className="radio__input" type="radio" value="option1" name="myRadio" id="myRadio1"/>
                <label className="radio__label" for="myRadio1"> High</label>
                <input className="radio__input" type="radio" value="option2" name="myRadio" id="myRadio2"/>
                <label className="radio__label" htmlFor="myRadio2"> Medium</label>
                <input className="radio__input" type="radio" value="option3" name="myRadio" id="myRadio3"/>
                <label className="radio__label" htmlFor="myRadio3"> Low</label>
            </div>
        </>
    )
}

export default PrioritySelector;
