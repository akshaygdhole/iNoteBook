import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Signup = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "", cpassword: "" });
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        // const { name, email, password } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ email, password, name })
            body: JSON.stringify({ email: credentials.email, password: credentials.password, name: credentials.name, cpassword: credentials.email })

        });
        const json = await response.json()
        // setNotes(notes.concat(note))

        if (json.success) {
            localStorage.setItem('auth-token', json.authToken)
            props.showAlert("Account created Successfully", "success")
            navigate("/");
        }
        else {
            props.showAlert("Invalid credentials", "danger")
        }

    }
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    return <div>
        <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={credentials.name} name="name" onChange={handleOnChange} aria-describedby="text" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} id="exampleInputEmail1" name="email" onChange={handleOnChange} aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} name="password" onChange={handleOnChange} minLength={5} required id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
                <input type="password" className="form-control" value={credentials.cpassword} name="cpassword" onChange={handleOnChange} minLength={5} required id="cpassword" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
}; 
