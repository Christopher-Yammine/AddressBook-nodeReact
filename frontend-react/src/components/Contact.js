import React from 'react';
import { useEffect, useState } from 'react';
const { default: axios } = require("axios");
const Contact = () => {
    const [contacts, setContact] = useState([]);
    function getContacts() {
        let data = { userId: localStorage.getItem("userId") }
        console.log(localStorage.getItem("userId"));
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/contact/getByid',
            data: data
        }).then(function (response) {
            console.log(response);
        })
    }
    useEffect(() => { getContacts() }, []);
    return (
        <div>Contact</div>
    )
}

export default Contact