import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SuperHero() {
    let [name, setName] = useState("");
    let [fName, setFName] = useState("");
    let [lName, setLName] = useState("");
    let [pName, setPName] = useState("");
    let jsondata = {}
    let navigate = useNavigate();
    const submitform = (e) => {
        e.preventDefault();
        jsondata = { 'name': name, 'firstName': fName, 'lastName': lName, 'place': pName }
        console.log(jsondata);
        let url = "https://localhost:7200/api/SuperHero";
        let header = { 'accept': 'text/plain', "Content-Type": "application/json", "charset": "utf8" }
        fetch(url,
            {
                method: "POST",
                headers: header,
                body: JSON.stringify(jsondata),
            }
        )
        navigate('/Home');

    }

    let getName = (e) => {
        setName(e.target.value)
    }
    let getFName = (e) => {
        setFName(e.target.value)
    }
    let getLName = (e) => {
        setLName(e.target.value)
    }
    let getPName = (e) => {
        setPName(e.target.value)
    }

    return (
        <div className='container'>
            <form onSubmit={submitform}>
                <div className="mb-3">
                    <label htmlFor="stuname" className="form-label">Hero Name</label>
                    <input type="text" onChange={getName} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="sturoll" className="form-label">First Name</label>
                    <input type="text" onChange={getFName} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="stucity" className="form-label">Last Name</label>
                    <input type="text" onChange={getLName} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="stucity" className="form-label">Place</label>
                    <input type="text" onChange={getPName} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}
