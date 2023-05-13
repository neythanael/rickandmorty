import modules from './Form.module.css'
import React from "react";
import validate from "./validation.js"



export default function Form(props){
  
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: '',
    });
    
    const [errors, setError] = React.useState({ 
        username: '',
        password: '',
    });
    
    const handleInputChange = (event) => {
            setUserData({...userData, [event.target.name]: event.target.value})
            setError(validate(userData));
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            props.login(userData)
        }
    return(
        
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">username</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            <p>{errors.username}</p>
            <label htmlFor="">password</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            <p>{errors.password}</p>
            <button>loguin</button>
        </form>
    </div>
)}