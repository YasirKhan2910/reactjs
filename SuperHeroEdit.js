import React, { useState, useEffect } from 'react'

export default function SuperHeroEdit() {
    let [name, setName] = useState("");
    let [fName, setFName] = useState("");
    let [lName, setLName] = useState("");
    let [pName, setPName] = useState("");
    let jsondata = {}
    let header = { 'accept': 'text/plain', "Content-Type": "application/json", "charset": "utf8" }
    const getid = new URLSearchParams(window.location.search);
    let id = getid.get('id');
    const submitform = (e) => {
        e.preventDefault();
        jsondata = { 'id':id, 'name': name, 'firstName': fName, 'lastName': lName, 'place': pName }
        console.log(jsondata);
        let url = "https://localhost:7200/api/SuperHero/";
        
        fetch(url,
            {
                method: "PUT",
                headers: header,
                body: JSON.stringify(jsondata),
            }
        )

    }

    useEffect(() => {
        
        let url = "https://localhost:7200/api/SuperHero/"+id;
        fetch(url, { method: "GET", headers: header})
            .then(res => res.json())
            .then(
                data => {
                    setName(data.name);
                    setFName(data.firstName);
                    setLName(data.lastName);
                    setPName(data.place);
                }
            ).catch(err => console.log(err));

    },[])
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
                <label htmlFor="stuname" className="form-label">Super Heroes</label>
                <input type="text" value={name} onChange={getName} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="sturoll" className="form-label">First Name</label>
                <input type="text" value={fName} onChange={getFName} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="stucity" className="form-label">Last Name</label>
                <input type="text" value={lName} onChange={getLName} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="stucity" className="form-label">Place</label>
                <input type="text" value={pName} onChange={getPName} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
