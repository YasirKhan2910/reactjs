import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserRegister() {
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let [ConfirmPassword, setConfirmPassword] = useState("");
    let jsondata = {}
    let navigate = useNavigate();
    const submitform = (e) => {
        e.preventDefault();
        jsondata = { 'email': Email, 'password': Password ,'confirmpassword': ConfirmPassword}
        // jsondata = JSON.stringify(jsondata);
        console.log(jsondata);
        let url = "https://localhost:7276/api/User/register";
        let header = { 'accept': '*/*', "Content-Type": "application/json" }
        fetch(url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify(jsondata),
            }
        ).then(res=>res.json()).then(data=>{navigate('/Userlogin/')})

    }

    let getEmail = (e) => {
        setEmail(e.target.value)
    }
    let getPassword = (e) => {
        setPassword(e.target.value)
    }
    let getConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
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
                    <input type="text" onChange={getPassword} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="sturoll" className="form-label">Confirm Password</label>
                    <input type="text" onChange={getConfirmPassword} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <br></br>
                <a href="http://localhost:3000/Userlogin/" title="Go to login page">Alredy register?</a>
            </form>
    </div>
  )
}
