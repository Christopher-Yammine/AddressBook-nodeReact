import React from 'react';
import { useEffect, useState } from 'react';
const { default: axios } = require("axios");
const Contacts = () => {
    const [showContacts, setContact] = useState([]);
    function getContacts() {
        let data = { userId: localStorage.getItem("userId") }
        console.log(localStorage.getItem("userId"));
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/contact/getByid',
            data: data
        }).then(function (response) {
            console.log(response);
            setContact(response.data);
            console.log(showContacts);

        })
    }
    useEffect(() => { getContacts() }, []);
    return (
        <div className='contactsContainer'>
            <div>
            <button type='button' className='btn btn-block' onClick={(e) => {

            }}>Add contact</button>
        </div>
            {showContacts.map((contact) => {
                return (
                    <div className='contactDiv'>
                        <div className='contactName'>
                            {contact.firstName} {contact.lastName}
                        </div>
                        <div className='phoneNumber'>{contact.phoneNumber}</div>
                    </div>)
            })}</div>
    )
}

export default Contacts