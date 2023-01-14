import React from "react";
import "./Pages/styles/SoftnessSelector.css"


function SoftnessSelector() {
    return (
        <>
            <div className="radio">
                <input className="radio__input_" type="radio" value="option1_" name="myRadio_" id="myRadio1_"/>
                <label className="radio__label_" for="myRadio1_"> Firm</label>
                <input className="radio__input_" type="radio" value="option2_" name="myRadio_" id="myRadio2_"/>
                <label className="radio__label_" htmlFor="myRadio2_"> Soft</label>
            </div>
        </>
    )
}

export default SoftnessSelector;
