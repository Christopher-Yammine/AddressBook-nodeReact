import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const { default: axios } = require("axios");
const Contacts = () => {

    const navigate = useNavigate();
    const [showContacts, setContact] = useState([]);
    const [filterAtt, setfilter] = useState("firstName");

    function changeFilter(e) {
        setfilter(e);
    }
    function filterArr(e) {
        console.log(filterAtt)
        console.log(e);
        if (e === "") {
            getContacts();
        } else if (filterAtt === "firstName") {
            setContact(showContacts.filter(contact => contact.firstName.includes(e)))
        } else if (filterAtt === "lastName") {
            setContact(showContacts.filter(contact => contact.lastName.includes(e)))
        } else if (filterAtt === "status") {
            setContact(showContacts.filter(contact => contact.status.includes(e)))
        } else if (filterAtt === "phoneNumber") {
            setContact(showContacts.filter(contact => contact.phoneNumber.includes(e)))
        } else if (filterAtt === "email") {
            setContact(showContacts.filter(contact => contact.email.includes(e)))
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
                <div>

                </div>
                <select name='filter' id='filter' className='filters' onChange={(e) => { changeFilter(e.currentTarget.value) }}>
                    <option className='options' value="firstName"> First Name</option>
                    <option value='lastName'>Last Name</option>
                    <option value='status'>Status</option>
                    <option value='phoneNumber'>Phone Number</option>
                    <option value='email'>Email</option>
                </select>
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