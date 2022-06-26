import React from 'react';
import { useEffect, useState } from 'react';
const { default: axios } = require("axios");
const Contacts = () => {
    const [showContacts, setContact] = useState([]);
    const [showAdd, setAdd] = useState(false);
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



        })
    }
    useEffect(() => { getContacts() }, []);
    return (
        <div className='contactsContainer'>
            <div>
                <button type='button' className='btn btn-block' onClick={(e) => {
                    setAdd(!showAdd);
                    console.log(showAdd);
                    console.log(showContacts.map((contact) => { return contact._id }));
                }}>Add contact</button>
            </div>
            {showContacts.map((contact) => {
                return (
                    <div className='contactDiv' key={contact._id}>
                        <div className='contactName'>

                            {contact.firstName} {contact.lastName}
                        </div>
                        <div className='phoneNumber' >{contact.phoneNumber}</div>
                    </div>)
            })}</div>
    )
}

export default Contacts