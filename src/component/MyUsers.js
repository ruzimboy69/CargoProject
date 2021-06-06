import React from 'react';
import {useEffect, useState} from 'react'
import axios from "axios";

function MyUsers(props) {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                setUsers(res.data);
                setData(res.data)
            })
    }, []);
    function selectedUser(event) {
        const selectUser=event.target.value;
        const filtered=data.filter(item=>(item.id==selectUser) || selectUser==='');
        setUsers(filtered)
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4">
                        <select onChange={selectedUser} className="form-control">
                            <option value="">All</option>
                            {data.map((item)=>(
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row my-5">
                    {users.map((item)=>(
                        <div className="col-md-4 my-3" key={item.id}>

                            <div className="card">
                                <div className="card-header text-center">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h6>Email:{item.email}</h6>
                                    <h6>Address:{item.address.city}</h6>
                                    <h6>Website:{item.website}</h6>
                                    <h6>Company:{item.company.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyUsers;