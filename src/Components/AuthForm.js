import React, { useState } from 'react'

const AuthForm = () => {

    const [userInputUsername, setUserInputUsername] = useState()
    const [UserInputPassword, setUserInputPassword] = useState()
    const [userInput, setUserInput] = useState({username: "", password: ""})

    const handleOnChange = (e) =>{
        if (e.target.name === "username"){
            setUserInput({...userInput, username: e.target.value })
        }

        if (e.target.name === "password"){
            setUserInput({...userInput, password: e.target.value})
        }

        console.log(userInput)
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        fetch("/api/User", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userInput)
            
        })
    }

    return (
        <div>
            <form className='' onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} type="text" placeholder='Username' name="username"></input>
                <input onChange={handleOnChange} type="text" placeholder='Password' name='password'></input>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default AuthForm