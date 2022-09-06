import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
export default function Home() {
    let [studetails, setStuDetails] = useState([]);
    useEffect(() =>{
        let url = "https://localhost:7200/api/SuperHero";
        fetch(url, {method: "GET"})
        .then(res => res.json())
        .then(data => setStuDetails(data)).catch(err => console.log(err));;
        
    })
    let [msg, setMsg] = useState(null);
    function deletestu(id){
        console.log(id);
        let jsondata = {'id':id};
        
        let url = "https://localhost:7200/api/SuperHero/"+id;
        fetch(url,
            {
                method:"DELETE",
                body: JSON.stringify(jsondata),
            })
        .then(response => response.json())
        .then(data => {setMsg(data.msg)
            window.location.reload(false);
            
        }
        )
    }
  return (
    <div>
            {msg !== null && <div className="alert alert-primary" role="alert">
                
            </div>}
            <h3 className='text-bold text-center my-4 mb-4'>Super Heroes</h3>
            <div className='container'>
                <table className="table mt-4 rounded">
                    <thead className=' table-dark'>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Place</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </thead>
                    <tbody className='table-info'>
                        {studetails.map((superhero, index) => (
                        <tr key={superhero.id}>
                            <th>{index+1}</th>
                            <td>{superhero.name}</td>
                            <td>{superhero.firstName}</td>
                            <td>{superhero.lastName}</td>
                            <td>{superhero.place}</td>
                            <td><Link className='btn btn-success btn-sm' to={`/superedit/?id=${superhero.id}`}> Edit</Link> <button className='btn btn-danger btn-sm' onClick={()=>deletestu(superhero.id)}> Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
