import React, {useEffect, useState} from 'react'


function Test() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/users").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (

        <div>
            {
                (typeof data.users === 'undefined') ? (<p>Loading...</p>) : (
                    data.users.map((user, i) => (
                            <p key={i}>{user.name}</p>
                        )
                    )
                )
            }

        </div>

    )
}

export default Test