import React, {useState} from "react";
import "./styles/CreateArea.css"
import PrioritySelector from "./PrioritySelector";
import SoftnessSelector from "./SoftnessSelector";
import Date from "./Date";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Todo Title"
                />
                <PrioritySelector/>
                <SoftnessSelector/>
                <Date/>





                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
