import React from "react";

function Date() {
    return (
        <form>
            <div className="date-box">

                <input
                    className="date"
                    id="date"
                    type="datetime-local"
                    name="date"
                    min="2022-06-01T08:30"
                    max="2024-06-30T16:30"
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                    required/>

            </div>

        </form>
    );
}

export default Date;



