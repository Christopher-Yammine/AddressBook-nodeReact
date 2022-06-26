import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const { default: axios } = require("axios");
const Contacts = () => {

    const navigate = useNavigate();
    const [showContacts, setContact] = useState([]);
    let initArr = [];
    function filterArr(e) {
        console.log(e);
        if (e == "") {
            getContacts();
        } else {
            setContact(showContacts.filter(contact => contact.firstName.includes(e)))
        }

    }
    function logout() {
        window.location.href = '/'
        localStorage.clear();
    }
    function getContacts() {
        let data = { userId: localStorage.getItem("userId") }

        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/contact/getByid',
            data: data
        }).then(function (response) {
            initArr = response.data;
            setContact(response.data);



        })
    }
    useEffect(() => { getContacts() }, []);
    return (
        <div className='contactsContainer'>
            <div>
                <button type='button' className='logOut btn-block' onClick={logout}>Log out</button>
            </div>
            <div>
                <button type='button' className='btn btn-block' onClick={(e) => {
                    navigate('/addcontact');
                }}>Add contact</button>
            </div>
            <div className='form-control'>
                <label>Filter</label>
                <input
                    type='text'
                    placeholder='enter keyword'
                    onChange={(e) => {
                        filterArr(e.currentTarget.value)
                    }}
                ></input>
            </div>
            {showContacts.map((contact) => {
                return (
                    <div className='contactDiv' key={contact._id}>
                        <div className='contactName'>
                            <div>
                                {contact.firstName} {contact.lastName}
                            </div>
                            <div className='status'>
                                {contact.status}
                            </div>
                        </div>
                        <div className='contactName'>
                            <div className='phoneNumber' >{contact.phoneNumber}</div>
                            <div className='email'>{contact.email}</div>
                        </div>

                    </div>)
            })}</div>
    )
}

export default Contacts