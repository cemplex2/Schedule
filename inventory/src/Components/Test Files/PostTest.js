import React, {useEffect, useState} from "react";
import {Form} from "./Form";

//Calls Form.js

export const PostTest = ({userInput}) => {

    const [person, setPerson] = useState([])
    const [addPerson, setAddPerson] = useState([''])

    useEffect(() => {
        fetch('/api').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setPerson(data))
    }, [])


    const handleFormSubmit = () => {
        fetch('api/create', {
            method: 'POST',
            body: JSON.stringify({
                name: addPerson
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        }).then(response => response.json())
            .then(message => console.log(message))
    }

    const handleFormChange = (inputValue) =>{
        setAddPerson(inputValue)
    }
    return (
        <>
            <Form userInput={addPerson} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
        </>
    )

}

