import React from "react";


export const Form = ({userInput, onFormChange, onFormSubmit}) => {

    const handleChange = (event) =>{
        onFormChange(event.target.value)

    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onFormSubmit()
    }



    return (
        <>
            <form onSubmit ={handleSubmit}>
                <label>
                    Name:
                    <input type="text" required value={userInput} onChange={handleChange}/>
                </label>
                <input type="submit"/>
            </form>
        </>
    )

}


