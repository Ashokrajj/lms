import React, { useState } from 'react'
import axios from 'axios';


export default function register() {
    const [name, setName] = useState('Ashok');
    const [email, setEmail] = useState('ashok@gmail.com');
    const [password, setPassword] = useState('123');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.table({ name, email, password })
        const { data } = await axios.post(`http://localhost:3000/api/register`, {
            name,
            email,
            password
        })
        console.log("Register response", data);
    }
    return (
        <>
            <div className='jumbotron bg-primary p-2 text-center square'>
                <h4>REGISTER </h4>
            </div>

            <div className='container col-md-4 offset-md-4 pb-3 mt-3'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='form-control mb-4 p-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />

                    <input type="email" className='form-control mb-4 p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <input type="password" className='form-control mb-4 p-2'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />


                    <button type="submit" className='btn w-100 btn-success'>Register</button>
                </form>
            </div>
        </>
    )
}
