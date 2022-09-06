import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
export default function Userlogin() {
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let jsondata = {}
    let navigate = useNavigate();
    const submitform = (e) => {
        e.preventDefault();
        jsondata = { 'email': Email, 'password': Password}
        // jsondata = JSON.stringify(jsondata);
        console.log(jsondata);
        let url = "https://localhost:7276/api/User/Login";
        let header = { 'accept': '*/*', "Content-Type": "application/json" }
        fetch(url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify(jsondata),
            }
        ).then(res=>res.json()).then(data=>{navigate('/Home/')})

    }

    let getEmail = (e) => {
        setEmail(e.target.value)
    }
    let getPassword = (e) => {
        setPassword(e.target.value)
    }

  return (
    <div className='container'>
            <form onSubmit={submitform}>
                <div className="mb-3">
                    <label htmlFor="stuname" className="form-label">Email</label>
                    <input type="text" onChange={getEmail} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="sturoll" className="form-label">Password</label>
                    <input type="text" onChange={getPassword} className="form-control" /><Link to="/Register" title="Go to W3Schools HTML section">Forgot Password?</Link>
                    <Link to="/Register" title="Go to W3Schools HTML section">Create new Account</Link>

                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
    </div>
  )
}
