import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


export const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4MjRiMTY5ZDFhYjBiNGE3MmY0YzIyIn0sImlhdCI6MTY1MjcwNjA3MH0.oiiz6sZczl5AqtZg73RIdUNfZppK8g72gOLQA77mNlw"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        // setNotes(notes.concat(note))
        console.log(json)
        if (json.success) {
            //redirct
            localStorage.setItem('auth-token', json.authtoken)
            props.showAlert("Logged in Successful", "success")
            navigate("/");

        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return <div>
        <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={handleOnChange} aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} name="password" onChange={handleOnChange} id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
};
