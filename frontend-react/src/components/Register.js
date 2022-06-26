import axios from 'axios';
import React from 'react'
import { useState } from 'react'
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    function register() {
        let data = {
            name: name,
            email: email,
            password: password
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/user/register',
            data: data
        }).then(function (response) {
            console.log(response);
            if (response.data) {
                window.location.href = '/'
            }
        })
    }

    return (
        <form className='add-form' onSubmit={onsubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Enter you name here'
                    onChange={(e) => {
                        setName(e.currentTarget.value);
                    }}
                ></input>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input
                    type='text'
                    placeholder='enter email'
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                    }}
                ></input>
            </div>
            <div className='form-control'>
                <label>password</label>
                <input
                    type='password'
                    placeholder='enter password'
                    onChange={(e) => {
                        setPass(e.currentTarget.value);
                    }}></input>
            </div>
            <button type='button' className='logOut btn-block' onClick={register}>Register</button>

        </form>
    )
}

export default Register